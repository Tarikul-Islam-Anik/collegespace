import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Box } from '@/components/layout/box';
import SectionHeading from '@/components/shared/section-heading';
import { Container } from '@/components/layout/container';

export const metadata: Metadata = {
  title: 'Notifications | ' + siteConfig.name,
  description: 'Post page.',
};

interface PostLayoutProps {
  children: React.ReactNode;
}

export default function PostLayout({ children }: PostLayoutProps) {
  return (
    <Box mx='auto' className='page-width'>
      <Container>
        <SectionHeading
          title='Notifications'
          description='All of your notifications in one place.'
        />
        {children}
      </Container>
    </Box>
  );
}
