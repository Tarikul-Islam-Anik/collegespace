import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Box } from '@/components/layout/box';
import SectionHeading from '@/components/shared/section-heading';
import { Container } from '@/components/layout/container';

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
      <Container>
        <SectionHeading
          title='Jobs & Bounties'
          description='Find all types of jobs and bounties for only for you.'
        />
        {children}
      </Container>
    </Box>
  );
}
