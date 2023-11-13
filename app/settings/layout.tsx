import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
import { Separator } from '@/components/ui/separator';
import { SidebarNav } from './components/sidebar-nav';
import { Container } from '@/components/layout/container';
import { Heading } from '@/components/typography/heading';

export const metadata: Metadata = {
  title: 'Settings | ' + siteConfig.name,
  description: 'Manage your account settings and edit your profile.',
};

const sidebarNavItems = [
  {
    title: 'Profile',
    href: '/settings',
  },
  {
    title: 'Personal Information',
    href: '/settings/personal-information',
  },
  {
    title: 'Educational information',
    href: '/settings/education',
  },
  {
    title: 'Projects',
    href: '/settings/projects',
  },
  {
    title: 'Company',
    href: '/settings/company',
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <Container className='max-w-3xl p-9'>
      <Flex direction='column'>
        <Box className='col-span-2 space-y-0.5'>
          <Heading size='2xl' weight='bold' className='tracking-tight'>
            Settings
          </Heading>
          <Text as='p' className='text-muted-foreground'>
            Manage your account settings and edit your profile.
          </Text>
        </Box>
        <Separator className='my-8' />
        <Flex
          direction='column'
          justify='between'
          className='space-y-8 lg:flex-row lg:space-y-0'
        >
          <aside className='-mx-4'>
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <Box className='flex-1 lg:max-w-lg'>{children}</Box>
        </Flex>
      </Flex>
    </Container>
  );
}
