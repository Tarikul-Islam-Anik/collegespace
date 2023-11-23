'use client';
import dynamic from 'next/dynamic';
import { Box } from '@/components/layout/box';
import Loader from '@/components/shared/loader';
import useStudentDetails from '@/hooks/useStudentDetails';
import SectionHeading from '@/components/shared/section-heading';
import MissingInfoWaring from '../components/missing-info-warning';

const SkillsForm = dynamic(() => import('./skills-form'), {
  ssr: false,
  loading: () => <Loader />,
});

export default function SettingsSkillsPage() {
  const { data, isLoading } = useStudentDetails();
  const skillInfo = data?.studentDetails?.skills?.split(',');
  const skills = isLoading ? (
    <Loader />
  ) : (
    skillInfo && <SkillsForm skills={skillInfo} />
  );

  return (
    <Box className='space-y-6'>
      <SectionHeading
        title='Skills'
        description='Add your skills to your profile and attract more recruiters.'
      />
      {!skillInfo ? <MissingInfoWaring /> : skills}
    </Box>
  );
}
