import { MessageText } from 'iconsax-react';
import { Button } from '@/components/ui/button';
import CommentDialog from '../../comment/comment-dialog';
import ToolTipParent from '@/components/shared/tooltip-parent';
import ScreenReaderOnly from '@/components/ui/screen-reader-only';
import { Box } from '@/components/layout/box';

const HandleComment = ({
  postId,
  postContent,
}: {
  postId: string;
  postContent: React.ReactNode;
}) => {
  return (
    <CommentDialog postId={postId} postContent={postContent}>
      <Box>
        <ToolTipParent content='Comment'>
          <Button variant='ghost' size='icon'>
            <MessageText className='text-muted-foreground' />
            <ScreenReaderOnly>Comment on</ScreenReaderOnly>
          </Button>
        </ToolTipParent>
      </Box>
    </CommentDialog>
  );
};

export default HandleComment;
