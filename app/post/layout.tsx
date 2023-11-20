import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Box } from '@/components/layout/box';
import BackButton from '@/components/shared/back-button';
import { Container } from '@/components/layout/container';

export const metadata: Metadata = {
  title: 'Post | ' + siteConfig.name,
  description: 'Post page.',
};

interface PostLayoutProps {
  children: React.ReactNode;
}

export default function PostLayout({ children }: PostLayoutProps) {
  return (
    <>
      <Box mx='auto' className='page-width' position='relative'>
        <Box className='fixed left-4 top-3.5 sm:absolute sm:-left-10 sm:top-5'>
          <BackButton />
        </Box>
        <Container>{children}</Container>
      </Box>
    </>
  );
}
