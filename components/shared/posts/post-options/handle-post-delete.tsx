'use client';

import { toast } from 'sonner';
import usePosts from '@/hooks/usePosts';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useSession } from 'next-auth/react';

const HandlePostDelete = ({ postId }: { postId: string }) => {
  const { data: session } = useSession();
  const { mutate } = usePosts(session?.user?.email!);

  function handleDeletePost() {
    toast.promise(
      fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      {
        loading: 'Deleting...',
        success: () => {
          mutate();
          return 'Post deleted';
        },
        error: 'Could not delete post',
      }
    );
  }

  return (
    <DropdownMenuItem className='text-destructive' onSelect={handleDeletePost}>
      Delete
    </DropdownMenuItem>
  );
};

HandlePostDelete.displayName = 'HandlePostDelete';
export default HandlePostDelete;
