"use client"

import { Flex } from '@/components/layout/flex';
import Loader from '@/components/shared/loader';
import ScreenReaderOnly from '@/components/ui/screen-reader-only';

export default function Loading() {
  return (
    <Flex justify='center' align='center' className='h-[80vh]'>
      <Loader />
      <ScreenReaderOnly>Loading...</ScreenReaderOnly>
    </Flex>
  );
}
