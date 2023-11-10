import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Separator } from '@/components/ui/separator';
import { SidebarNav } from './components/sidebar-nav';
import { Flex } from '@/components/layout/flex';
import { Container } from '@/components/layout/container';

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
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <Container className='max-w-3xl p-9'>
      <Flex direction='column'>
        <div className='col-span-2 space-y-0.5'>
          <h2 className='text-2xl font-bold tracking-tight'>Settings</h2>
          <p className='text-muted-foreground'>
            Manage your account settings and edit your profile.
          </p>
        </div>
        <Separator className='my-8' />
        <Flex
          direction='column'
          justify='between'
          className='space-y-8 lg:flex-row lg:space-y-0'
        >
          <aside className='-mx-4'>
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className='flex-1 lg:max-w-lg'>{children}</div>
        </Flex>
      </Flex>
    </Container>
  );
}
