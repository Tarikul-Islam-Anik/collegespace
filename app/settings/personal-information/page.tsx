'use client';
import dynamic from 'next/dynamic';
import { Box } from '@/components/layout/box';
import Loader from '@/components/shared/loader';
import SectionHeading from '@/components/shared/section-heading';
import useStudentDetails from '@/hooks/useStudentDetails';

const PersonalInfoForm = dynamic(
  () => import('./components/personal-info-form'),
  {
    loading: () => <Loader />,
  }
);

export default function SettingsPersonalInformationPage() {
  const { data, isLoading } = useStudentDetails();

  return (
    <Box className='space-y-6'>
      <SectionHeading
        title='Personal Information'
        description='Your personal information is not publicly visible but recuiters can see it when you apply for a job.'
      />
      {isLoading ? <Loader /> : data && <PersonalInfoForm data={data} />}
    </Box>
  );
}
