'use client';

import { Heart } from 'iconsax-react';
import useLike from '@/hooks/useLike';
import { Button } from '@/components/ui/button';
import ToolTipParent from '@/components/shared/tooltip-parent';
import ScreenReaderOnly from '@/components/ui/screen-reader-only';

const HandleLike = ({ postId }: { postId: string }) => {
  const { liked, toggleLike } = useLike(postId);

  async function handleLike() {
    await toggleLike();
  }

  return (
    <ToolTipParent content='Like'>
      <Button variant='ghost' size='icon' onClick={handleLike}>
        <Heart
          variant={liked ? 'Bold' : 'Outline'}
          className={liked ? 'text-primary' : 'text-muted-foreground'}
        />
        <ScreenReaderOnly>Like</ScreenReaderOnly>
      </Button>
    </ToolTipParent>
  );
};

HandleLike.displayName = 'HandleLike';
export default HandleLike;
