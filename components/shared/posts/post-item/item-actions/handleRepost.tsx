import { Repeat } from 'iconsax-react';
import { Button } from '@/components/ui/button';
import ScreenReaderOnly from '@/components/ui/screen-reader-only';
import ToolTipParent from '@/components/shared/tooltip-parent';

const HandleRepost = () => {
  return (
    <ToolTipParent content='Repost'>
      <Button variant='ghost' size='icon'>
        <Repeat className='text-muted-foreground' />
        <ScreenReaderOnly>Repost</ScreenReaderOnly>
      </Button>
    </ToolTipParent>
  );
};

HandleRepost.displayName = 'HandleRepost';
export default HandleRepost;
