'use client';

import { toast } from 'sonner';
import useUserPosts from '@/hooks/useUserPosts';
import useCurrentUser from '@/hooks/useCurrentUser';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

const HandlePostDelete = ({ postId }: { postId: string }) => {
  const { currentUser } = useCurrentUser();
  const { mutate } = useUserPosts(currentUser?.email!);

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
