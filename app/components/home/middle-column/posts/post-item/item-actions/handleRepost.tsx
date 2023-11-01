import { Repeat } from 'iconsax-react';
import { Button } from '@/components/ui/button';
import ScreenReaderOnly from '@/components/ui/screen-reader-only';

const HandleRepost = () => {
  return (
    <Button variant='ghost' size='icon'>
      <Repeat className='text-muted-foreground' />
      <ScreenReaderOnly>Repost</ScreenReaderOnly>
    </Button>
  );
};

HandleRepost.displayName = 'HandleRepost';
export default HandleRepost;
