'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { GraduationCap } from 'lucide-react';
import { Box } from '@/components/layout/box';
import Loader from '@/components/shared/loader';
import { Flex } from '@/components/layout/flex';
import EmptyState from '@/components/shared/empty-state';
import FormDialog from '@/components/shared/form-dialog';
import useStudentDetails from '@/hooks/useStudentDetails';
import SectionHeading from '../components/section-heading';
import ListContainer from '@/components/shared/list-container';

const EducationalInfoForm = dynamic(() => import('./educational-info-form'), {
  loading: () => <Loader />,
});

export default function SettingsEducationInformationPage() {
  const [open, setOpen] = useState(false);
  const { data } = useStudentDetails();
  const educationalInfo = data?.studentDetails.educations;
  const sortedEducation = educationalInfo?.sort(
    (a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
  );

  const AddNew = (
    <FormDialog
      open={open}
      setOpen={setOpen}
      title='Education'
      label='Add information'
      description='All fields are required'
    >
      <EducationalInfoForm setOpen={setOpen} />
    </FormDialog>
  );

  return (
    <Box className='space-y-6'>
      <SectionHeading
        title='Educational Information'
        description='Add your academic informations to help us find the best job for you.'
      />
      {sortedEducation?.length === 0 ? (
        <EmptyState
          title='No academic information added yet'
          description='Recuiters will be able to find you easily.'
          icon={<GraduationCap className='h-12 w-12' />}
        >
          {AddNew}
        </EmptyState>
      ) : (
        sortedEducation && (
          <ListContainer type='education' items={sortedEducation} />
        )
      )}
      {educationalInfo?.length! > 0 && sortedEducation?.length! < 4 && (
        <Flex justify='center'>{AddNew}</Flex>
      )}
    </Box>
  );
}
