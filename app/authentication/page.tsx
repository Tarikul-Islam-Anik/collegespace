import { Metadata } from 'next';
import Link from 'next/link';
import { Box, Flex, Text, Heading } from '@radix-ui/themes';
import { Command } from 'iconsax-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import Quote from './components/quote';
import { buttonVariants } from '@/components/ui/button';
import UserAuthForm from './components/user-auth-form';
import ContinueWith from './components/continue-with';

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
      <div className='hidden h-screen flex-col bg-muted bg-zinc-900 p-10 text-white dark:border-r lg:flex'>
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <Command className='mr-2 h-6 w-6' />
          College Space
        </div>
        <Quote />
      </div>
      <Box className='my-auto lg:p-8'>
        <Flex
          direction='column'
          justify='center'
          gap='6'
          mx='auto'
          className='w-full sm:w-[350px]'
        >
          <Flex direction='column' gap='2' className='text-center'>
            <Heading size='6' className='font-semibold tracking-tight'>
              Sign in to your account
            </Heading>
            <Text size='2' className='text-muted-foreground'>
              Enter your email and password to continue
            </Text>
          </Flex>
          <UserAuthForm />
          <ContinueWith />
          <Text size='2' className='px-8 text-center text-muted-foreground'>
            By clicking continue, you agree to our{' '}
            <Link
              href='/terms'
              className='underline underline-offset-4 hover:text-primary'
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href='/privacy'
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
