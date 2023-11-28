'use client';
import { ArrowLeft } from 'iconsax-react';
import { Button } from '@/components/ui/button';
import ScreenReaderOnly from '@/components/ui/screen-reader-only';
import Link from 'next/link';

const BackButton = () => {
  return (
    <Link href='/' passHref>
      <Button variant='secondary' size='icon'>
        <ArrowLeft size={20} className='text-muted-foreground' />
        <ScreenReaderOnly>Go Back</ScreenReaderOnly>
      </Button>
    </Link>
  );
};

BackButton.displayName = 'BackButton';
export default BackButton;
