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

const PostOptions = ({
  postId,
  userId,
}: {
  postId: string;
  userId: string;
}) => {
  const { currentUser } = useCurrentUser();
  const showUnfollow = currentUser?.id !== userId;
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/post/${postId}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          <More className='text-muted-foreground' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {showUnfollow && <DropdownMenuItem>Unfollow</DropdownMenuItem>}
        <DropdownMenuItem onSelect={handleCopyLink}>Copy link</DropdownMenuItem>
        <DropdownMenuItem>Mute</DropdownMenuItem>
        <DropdownMenuItem>Hide</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='text-destructive'>Report</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PostOptions;
