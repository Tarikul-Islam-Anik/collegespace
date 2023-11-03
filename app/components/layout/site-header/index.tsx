'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navbar from '../navbar';
import MoreOptions from './more-options';

const SiteHeader = () => {
  const pathname = usePathname();
  if (pathname === '/authentication' || pathname === '/bounty-board') return null;
  return (
    <header className='relative z-50 w-full'>
      <Flex
        align='center'
        justify='between'
        top='0'
        className='container h-16 border-b sm:relative'
      >
        <Box className='block sm:hidden' />
        <Heading as='h1' className='text-center text-2xl font-bold'>
          <Link href='/'>College Space</Link>
        </Heading>
        <MoreOptions />
      </Flex>
      <Flex
        width='100%'
        align='center'
        justify='center'
        className='fixed bottom-0 h-16 border-y sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:transform'
      >
        <Navbar />
      </Flex>
    </header>
  );
};

SiteHeader.displayName = 'SiteHeader';
export default SiteHeader;
