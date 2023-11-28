import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Box } from '@/components/layout/box';
import BackButton from '@/components/shared/back-button';
import { Container } from '@/components/layout/container';

export const metadata: Metadata = {
  title: 'CV | ' + siteConfig.name,
  description: "Student's CV page.",
};

interface PostLayoutProps {
  children: React.ReactNode;
}

export default function PostLayout({ children }: PostLayoutProps) {
  return (
    <>
      <Box mx='auto' position='relative'>
        <Box className='fixed left-4 top-3.5 z-50 sm:hidden'>
          <BackButton />
        </Box>
        <Container>{children}</Container>
      </Box>
    </>
  );
}
