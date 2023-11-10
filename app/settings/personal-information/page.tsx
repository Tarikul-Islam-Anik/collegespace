import { Box } from '@/components/layout/box';
import SectionHeading from '../components/section-heading';
import PersonalInfoForm from './components/personal-info-form';

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
