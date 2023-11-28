'use client';
import { toast } from 'sonner';
import { useState } from 'react';
import Loader from '../loader';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { VariantProps } from 'class-variance-authority';
import usePosts from '@/hooks/usePosts';

interface FollowButtonProps extends VariantProps<typeof buttonVariants> {
  userId: string;
  className?: string;
  defaultLabel?: string;
  asChild?: boolean;
}

const FollowButton = ({
  userId,
  variant = 'outline',
  className,
  defaultLabel,
  asChild,
}: FollowButtonProps) => {
  const [loading, setLoading] = useState(false);
  const [label, setLabel] = useState(defaultLabel || 'Follow');
  const { mutate } = usePosts();
  function handleFollow() {
    setLoading(true);
    toast.promise(
      fetch(`/api/users/follow/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json()),
      {
        loading: label + 'ing...',
        success: (data) => {
          mutate();
          setLoading(false);
          setLabel(data.action);
          return data.message;
        },
        error: 'Something went wrong!',
      }
    );
  }

  return !asChild ? (
    <Button
      variant={variant}
      size='sm'
      onClick={handleFollow}
      className={cn('w-20 capitalize', className)}
      disabled={loading}
    >
      {loading ? <Loader className='h-4 w-4 text-muted-foreground' /> : label}
    </Button>
  ) : (
    <span onClick={handleFollow}>
      {loading ? <Loader className='h-4 w-4' /> : label}
    </span>
  );
};

FollowButton.displayName = 'FollowButton';
export default FollowButton;
