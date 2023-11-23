'use client';
import { toast } from 'sonner';
import { useState } from 'react';
import Loader from '../loader';
import { Button } from '@/components/ui/button';
import usePosts from '@/hooks/usePosts';

interface FollowButtonProps {
  userId: string;
  defaultLabel?: string;
  asChild?: boolean;
}

const FollowButton = ({ userId, defaultLabel, asChild }: FollowButtonProps) => {
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
      variant='outline'
      size='sm'
      onClick={handleFollow}
      className='w-20 capitalize'
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
