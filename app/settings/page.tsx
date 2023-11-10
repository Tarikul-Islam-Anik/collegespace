import { Box } from '@/components/layout/box';
import ProfileForm from './components/profile-form';
import SectionHeading from './components/section-heading';

export default function SettingsProfilePage() {
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
