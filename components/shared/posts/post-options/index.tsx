'use client';

import { More } from 'iconsax-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import useCurrentUser from '@/hooks/useCurrentUser';
import HandlePostCopy from './handle-post-copy';
import HandlePostDelete from './handle-post-delete';

const PostOptions = ({
  postId,
  userId,
}: {
  postId: string;
  userId: string;
}) => {
  const { currentUser } = useCurrentUser();
  const showUnfollow = currentUser?.id !== userId;
  const showDelete = currentUser?.id === userId;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          <More className='text-muted-foreground' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {showUnfollow && <DropdownMenuItem>Unfollow</DropdownMenuItem>}
        <HandlePostCopy postId={postId} />
        <DropdownMenuItem>Mute</DropdownMenuItem>
        <DropdownMenuItem>Hide</DropdownMenuItem>
        <DropdownMenuSeparator />
        {showDelete ? (
          <HandlePostDelete postId={postId} />
        ) : (
          <DropdownMenuItem className='text-destructive'>
            Report
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PostOptions;
