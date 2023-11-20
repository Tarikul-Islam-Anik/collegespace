'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@/components/layout/box';
import Loader from '@/components/shared/loader';
import { Flex } from '@/components/layout/flex';
import EmptyState from '@/components/shared/empty-state';
import FormDialog from '@/components/shared/form-dialog';
import useStudentDetails from '@/hooks/useStudentDetails';
import SectionHeading from '../../../components/shared/section-heading';
import ListContainer from '@/components/shared/list-container';
import { Star1 } from 'iconsax-react';

const ExperienceForm = dynamic(() => import('./experience-form'), {
  ssr: false,
  loading: () => <Loader />,
});

export default function SettingsSkillsPage() {
  const [open, setOpen] = useState(false);
  const { data } = useStudentDetails();
  const experiences = data?.studentDetails?.experiences;
  const sortedExperiences = experiences?.sort(
    (a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
  );

  const AddNew = (
    <FormDialog
      open={open}
      setOpen={setOpen}
      title='Experience'
      label='Add experience'
      description='All fields are required'
    >
      <ExperienceForm setOpen={setOpen} />
    </FormDialog>
  );

  return (
    <Box className='space-y-6'>
      <SectionHeading
        title='Experience'
        description='Share past jobs and internships experiences to your profile. Leave blank if you don’t have any.'
      />
      {sortedExperiences?.length === 0 ? (
        <EmptyState
          title='No previous experience found'
          description='Add to your profile and attract more recruiters.'
          icon={<Star1 className='h-12 w-12' />}
        >
          {AddNew}
        </EmptyState>
      ) : (
        sortedExperiences && (
          <ListContainer type='experience' items={sortedExperiences} />
        )
      )}
      {experiences?.length! > 0 && sortedExperiences?.length! < 4 && (
        <Flex justify='center'>{AddNew}</Flex>
      )}
    </Box>
  );
}
