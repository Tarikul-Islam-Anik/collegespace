import { MessageText } from 'iconsax-react';
import { Button } from '@/components/ui/button';
import ReplyDialog from '../../reply/reply-dialog';
import ToolTipParent from '@/components/shared/tooltip-parent';
import ScreenReaderOnly from '@/components/ui/screen-reader-only';
import { Box } from '@/components/layout/box';

const HandleReply = ({
  postId,
  postContent,
}: {
  postId: string;
  postContent: React.ReactNode;
}) => {
  return (
    <ReplyDialog postId={postId} postContent={postContent}>
      <Box>
        <ToolTipParent content='Comment'>
          <Button variant='ghost' size='icon'>
            <MessageText className='text-muted-foreground' />
            <ScreenReaderOnly>Comment on</ScreenReaderOnly>
          </Button>
        </ToolTipParent>
      </Box>
    </ReplyDialog>
  );
};

HandleReply.displayName = 'HandleReply';
export default HandleReply;
