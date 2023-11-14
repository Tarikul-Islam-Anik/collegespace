import { MessageText } from 'iconsax-react';
import { Button } from '@/components/ui/button';
import ScreenReaderOnly from '@/components/ui/screen-reader-only';
import CommentDialog from '../../comment/comment-dialog';

const HandleComment = ({ postContent }: { postContent: React.ReactNode }) => {
  return (
    <CommentDialog postContent={postContent}>
      <Button variant='ghost' size='icon'>
        <MessageText className='text-muted-foreground' />
        <ScreenReaderOnly>Comment</ScreenReaderOnly>
      </Button>
    </CommentDialog>
  );
};

export default HandleComment;
