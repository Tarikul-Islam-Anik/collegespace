import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Box } from '@/components/layout/box';
import SectionHeading from '@/components/shared/section-heading';
import { Container } from '@/components/layout/container';

export const metadata: Metadata = {
  title: 'Search | ' + siteConfig.name,
  description: 'Search page.',
};

interface PostLayoutProps {
  children: React.ReactNode;
}

export default function PostLayout({ children }: PostLayoutProps) {
  return (
    <Box mx='auto' className='page-width'>
      <Container>
        <SectionHeading
          title='Search'
          description='Find what you are looking for.'
        />
        {children}
      </Container>
    </Box>
  );
}
