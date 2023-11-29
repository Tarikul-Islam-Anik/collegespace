import { Metadata } from 'next';
import Link from 'next/link';
import { Command } from 'iconsax-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import Quote from './components/quote';
import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
import ContinueWith from './components/continue-with';
import UserAuthForm from './components/user-auth-form';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/typography/heading';
import Logo from '@/components/shared/logo';

export const metadata: Metadata = {
  title: 'Authentication | ' + siteConfig.name,
};

export default function AuthenticationPage() {
  return (
    <Box className='container relative grid h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <Link
        href='/bounty-board'
        className={cn(
          buttonVariants({ variant: 'secondary' }),
          'absolute right-4 top-4 md:right-8 md:top-8'
        )}
      >
        Bounty Board
      </Link>
      <Flex
        direction='column'
        className='hidden h-screen bg-muted bg-zinc-900 p-10 text-white dark:border-r lg:flex'
      >
        <Logo className='relative z-20' />
        <Quote />
      </Flex>
      <Box my='auto' className='lg:p-8'>
        <Flex
          direction='column'
          justify='center'
          gap={4}
          mx='auto'
          width='full'
          className='sm:w-[350px]'
        >
          <Flex direction='column' gap={2} className='text-center'>
            <Heading size='3xl' weight='semibold' className='tracking-tight'>
              Sign in to your account
            </Heading>
            <Text size='sm' className='text-muted-foreground'>
              Enter your email and password to continue
            </Text>
          </Flex>
          <UserAuthForm />
          <ContinueWith />
          <Text size='xs' className='px-8 text-center text-muted-foreground'>
            By clicking continue, you agree to our{' '}
            <Link
              href='#'
              className='underline underline-offset-4 hover:text-primary'
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href='#'
              className='underline underline-offset-4 hover:text-primary'
            >
              Privacy Policy
            </Link>
            .
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
