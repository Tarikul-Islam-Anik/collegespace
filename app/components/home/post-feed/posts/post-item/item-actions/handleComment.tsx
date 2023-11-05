import { MessageText } from 'iconsax-react';
import { Button } from '@/components/ui/button';
import ScreenReaderOnly from '@/components/ui/screen-reader-only';

const HandleComment = () => {
  return (
    <Button variant='ghost' size='icon'>
      <MessageText className='text-muted-foreground' />
      <ScreenReaderOnly>Comment</ScreenReaderOnly>
    </Button>
  );
};

export default HandleComment;
