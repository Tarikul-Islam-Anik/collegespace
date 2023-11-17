import { Repeat } from 'iconsax-react';
import { Button } from '@/components/ui/button';
import ScreenReaderOnly from '@/components/ui/screen-reader-only';
import ToolTipParent from '@/components/shared/tooltip-parent';
import { toast } from 'sonner';

const HandleRepost = ({ postId }: { postId: string }) => {
  function handleRepost() {
    toast.promise(
      fetch(`/api/posts/repost`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId,
        }),
      }),
      {
        loading: 'Reposting...',
        success: (res) => {
          if (res.status === 201) return 'Reposted!';
          else return 'You have already reposted this post!';
        },
        error: 'Something went wrong!',
      }
    );
  }

  return (
    <ToolTipParent content='Repost'>
      <Button variant='ghost' size='icon' onClick={handleRepost}>
        <Repeat className='text-muted-foreground' />
        <ScreenReaderOnly>Repost</ScreenReaderOnly>
      </Button>
    </ToolTipParent>
  );
};

HandleRepost.displayName = 'HandleRepost';
export default HandleRepost;
