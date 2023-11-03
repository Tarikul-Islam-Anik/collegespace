'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navbar from './navbar';
import MoreOptions from './more-options';
import { Flex } from '@/components/layout/flex';
import { Box } from '@/components/layout/box';
import { Heading } from '@/components/typography/heading';
import { Container } from '@/components/layout/container';

const SiteHeader = () => {
  const pathname = usePathname();
  if (pathname === '/authentication' || pathname === '/bounty-board')
    return null;
  return (
    <header className='relative z-50 w-full'>
      <Container asChild>
        <Flex
          align='center'
          justify='between'
          className='top-0 h-16 border-b sm:relative'
        >
          <Box className='block sm:hidden' />
          <Heading as='h1' className='text-center text-2xl font-bold'>
            <Link href='/'>College Space</Link>
          </Heading>
          <MoreOptions />
        </Flex>
      </Container>
      <Flex
        width='full'
        align='center'
        justify='center'
        position='fixed'
        className='bottom-0 h-16 border-y sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:transform'
      >
        <Navbar />
      </Flex>
    </header>
  );
};

SiteHeader.displayName = 'SiteHeader';
export default SiteHeader;
