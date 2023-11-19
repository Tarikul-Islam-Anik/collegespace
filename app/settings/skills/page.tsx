'use client';
import dynamic from 'next/dynamic';
import { Box } from '@/components/layout/box';
import Loader from '@/components/shared/loader';
import useStudentDetails from '@/hooks/useStudentDetails';
import SectionHeading from '@/components/shared/section-heading';

const SkillsForm = dynamic(() => import('./skills-form'), {
  ssr: false,
  loading: () => <Loader />,
});

export default function SettingsSkillsPage() {
  const { data, isLoading } = useStudentDetails();
  const skills = data?.studentDetails.skills?.split(',');
  return (
    <Box className='space-y-6'>
      <SectionHeading
        title='Skills'
        description='Add your skills to your profile and attract more recruiters.'
      />
      {isLoading ? <Loader /> : skills && <SkillsForm skills={skills} />}
    </Box>
  );
}
