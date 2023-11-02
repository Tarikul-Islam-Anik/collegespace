import { More } from 'iconsax-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const PostOptions = ({ postId }: { postId: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          <More className='text-muted-foreground' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Unfollow</DropdownMenuItem>
        <CopyToClipboard text={`${window.location.origin}/posts/${postId}`}>
          <DropdownMenuItem>Copy link</DropdownMenuItem>
        </CopyToClipboard>
        <DropdownMenuItem>Mute</DropdownMenuItem>
        <DropdownMenuItem>Hide</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='text-destructive'>Report</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PostOptions;
