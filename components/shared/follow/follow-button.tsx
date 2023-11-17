'use client';
import { toast } from 'sonner';
import { useState } from 'react';
import Loader from '../loader';
import { Button } from '@/components/ui/button';

const FollowButton = ({ userId }: { userId: string }) => {
  const [loading, setLoading] = useState(false);
  const [label, setLabel] = useState('Follow');

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
        success: (data) => {
          setLoading(false);
          setLabel(data.action);
          return data.message;
        },
        error: 'Something went wrong!',
      }
    );
  }

  return (
    <Button
      variant='outline'
      size='sm'
      onClick={handleFollow}
      className='w-20 capitalize'
      disabled={loading}
    >
      {loading ? <Loader className='h-4 w-4 text-muted-foreground' /> : label}
    </Button>
  );
};

FollowButton.displayName = 'FollowButton';
export default FollowButton;
