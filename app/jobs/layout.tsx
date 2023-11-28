import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Box } from '@/components/layout/box';

export const metadata: Metadata = {
  title: 'Jobs & Bounties | ' + siteConfig.name,
  description: 'Remote jobs and bounties for aspiring students.',
};

interface PostLayoutProps {
  children: React.ReactNode;
}

export default function PostLayout({ children }: PostLayoutProps) {
  return (
    <Box mx='auto' className='page-width'>
      {children}
    </Box>
  );
}
