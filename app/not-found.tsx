'use client';

import { Flex } from '@/components/layout/flex';
import { Grid } from '@/components/layout/grid';
import { Heading } from '@/components/typography/heading';
import { Text } from '@/components/typography/text';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Grid className='grid h-[80vh] place-content-center place-items-center px-6 py-24 sm:py-32 lg:px-8'>
      <Flex direction={'column'} align='center' gap={2}>
        <Text color='primary' weight='semibold' size='lg'>404</Text>
        <Heading
          as='h1'
          size='3xl'
          weight='bold'
          className='tracking-tight sm:text-5xl'
        >
          Page not found
        </Heading>
        <Text color='muted-foreground'>
          Sorry, we couldn’t find the page you’re looking for.
        </Text>
        <Flex align='center' justify='center' mt={4}>
          <Link href='/' className={buttonVariants({ variant: 'default' })}>
            Go back home
          </Link>
        </Flex>
      </Flex>
    </Grid>
  );
}
