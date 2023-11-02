import ToolTipParent from '@/components/shared/tooltip-parent';
import { Button } from '@/components/ui/button';
import { Flex } from '@radix-ui/themes';
import { Calendar, GalleryAdd, TaskSquare } from 'iconsax-react';

const PostAddons = () => {
  return (
    <Flex gap='4'>
      <ToolTipParent content='Add a photo'>
        <Button disabled variant='ghost' size='icon'>
          <GalleryAdd className='text-muted-foreground'/>
        </Button>
      </ToolTipParent>
      <ToolTipParent content='Add an event'>
        <Button disabled variant='ghost' size='icon'>
          <Calendar className='text-muted-foreground'/>
        </Button>
      </ToolTipParent>
      <ToolTipParent content='Add a poll'>
        <Button disabled variant='ghost' size='icon'>
          <TaskSquare className='text-muted-foreground'/>
        </Button>
      </ToolTipParent>
    </Flex>
  );
};

export default PostAddons;
