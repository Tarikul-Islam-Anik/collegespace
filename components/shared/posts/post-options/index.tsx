'use client';

import { More } from 'iconsax-react';
import { useSession } from 'next-auth/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import HandlePostCopy from './handle-post-copy';
import HandlePostDelete from './handle-post-delete';
import FollowButton from '@/components/shared/follow/follow-button';

const PostOptions = ({
  postId,
  userId,
}: {
  postId: string;
  userId: string;
}) => {
  const { data: session } = useSession();
  
  // @ts-ignore
  const currentUserId = session?.user?.id!;

  const showUnfollow = currentUserId !== userId;
  const showDelete = currentUserId === userId;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          <More className='text-muted-foreground' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {showUnfollow && (
          <DropdownMenuItem>
            <FollowButton asChild userId={userId} isFollowing='Unfollow' />
          </DropdownMenuItem>
        )}
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
