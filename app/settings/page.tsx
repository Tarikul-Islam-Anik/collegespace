'use client';
import dynamic from 'next/dynamic';
import useUser from '@/hooks/useUser';
import { Box } from '@/components/layout/box';
import Loader from '@/components/shared/loader';
import SectionHeading from '@/components/shared/section-heading';

const ProfileForm = dynamic(() => import('./components/profile-form'), {
  ssr: false,
  loading: () => <Loader />,
});

export default function SettingsPage() {
  const { user, isLoading } = useUser();
  return (
    <Box className='space-y-6'>
      <SectionHeading
        title='Profile'
        description='This information will be displayed publicly so be careful what you share.'
      />
      {isLoading ? <Loader /> : user && <ProfileForm user={user} />}
    </Box>
  );
}
