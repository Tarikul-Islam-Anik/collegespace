import dynamic from 'next/dynamic';
import { Box } from '@/components/layout/box';
import Loader from '@/components/shared/loader';
import SectionHeading from '../components/section-heading';

const PersonalInfoForm = dynamic(
  () => import('./components/personal-info-form'),
  {
    loading: () => <Loader />,
  }
);

export default function SettingsPersonalInformationPage() {
  return (
    <Box className='space-y-6'>
      <SectionHeading
        title='Personal Information'
        description='Your personal information is not publicly visible but recuiters can see it when you apply for a job.'
      />
      <PersonalInfoForm />
    </Box>
  );
}
