import dynamic from 'next/dynamic';
import { Box } from '@/components/layout/box';
import Loader from '@/components/shared/loader';
import SectionHeading from './components/section-heading';

const ProfileForm = dynamic(() => import('./components/profile-form'), {
  loading: () => <Loader />,
});

export default function SettingsPage() {
  return (
    <Box className='space-y-6'>
      <SectionHeading
        title='Profile'
        description='This information will be displayed publicly so be careful what you share.'
      />
      <ProfileForm />
    </Box>
  );
}
