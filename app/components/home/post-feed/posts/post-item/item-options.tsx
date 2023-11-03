import { More } from 'iconsax-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

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
        <DropdownMenuItem
          onSelect={() => {
            navigator.clipboard.writeText(
              `${window.location.origin}/post/${postId}`
            );
          }}
        >
          Copy link
        </DropdownMenuItem>
        <DropdownMenuItem>Mute</DropdownMenuItem>
        <DropdownMenuItem>Hide</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='text-destructive'>Report</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PostOptions;
