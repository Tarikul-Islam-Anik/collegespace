'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navbar from './navbar';
import MoreOptions from './more-options';
import Logo from '@/components/shared/logo';
import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import { Heading } from '@/components/typography/heading';
import { Container } from '@/components/layout/container';

const SiteHeader = () => {
  const pathname = usePathname();
  if (pathname === '/authentication' || pathname === '/bounty-board')
    return null;
  return (
    <header className='relative z-50 mb-6 w-full'>
      <Container asChild className='border-b '>
        <Flex
          align='center'
          justify='between'
          className='top-0 h-16 sm:relative'
        >
          <Box className='mr-9 block sm:hidden' />
          <Heading as='h1' className='z-50 text-center sm:ml-5'>
            <Link href='/'>
              <Logo className='text-xl font-bold' />
            </Link>
          </Heading>
          <MoreOptions />
        </Flex>
      </Container>
      <Flex
        width='full'
        align='center'
        justify='center'
        position='fixed'
        className='bottom-0 h-16 border-y bg-background sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:transform'
      >
        <Navbar />
      </Flex>
    </header>
  );
};

SiteHeader.displayName = 'SiteHeader';
export default SiteHeader;
