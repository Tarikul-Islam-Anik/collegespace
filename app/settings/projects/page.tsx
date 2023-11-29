'use client';

import { useState } from 'react';
import { Folder } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import Loader from '@/components/shared/loader';
import EmptyState from '@/components/shared/empty-state';
import FormDialog from '@/components/shared/form-dialog';
import SectionHeading from '../../../components/shared/section-heading';
import ListContainer from '@/components/shared/list-container';
import useStudentDetails from '@/hooks/useStudentDetails';
import MissingInfoWaring from '../components/missing-info-warning';

const ProjectForm = dynamic(() => import('./project-form'), {
  loading: () => <Loader />,
});

export default function SettingsProjectPage() {
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useStudentDetails();

  if (isLoading) {
    return <Loader />;
  }

  const projectsInfo = data?.studentDetails?.projects;

  const sortedProjects = projectsInfo?.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  const AddNew = (
    <FormDialog
      open={open}
      setOpen={setOpen}
      title='Add project'
      label='Add project'
      description='Website field is optional'
    >
      <ProjectForm setOpen={setOpen} />
    </FormDialog>
  );

  const projects =
    sortedProjects?.length === 0 ? (
      <EmptyState
        title='No projects added yet'
        description='Add your projects to showcase them to the world.'
        icon={<Folder className='h-12 w-12' />}
      >
        {AddNew}
      </EmptyState>
    ) : (
      sortedProjects && <ListContainer type='project' items={sortedProjects} />
    );

  return (
    <Box className='space-y-6'>
      <SectionHeading
        title='Projects'
        description='Showcase your projects and let people know what you are working on.'
      />

      {!projectsInfo ? <MissingInfoWaring /> : projects}

      {sortedProjects?.length! > 0 && <Flex justify='center'>{AddNew}</Flex>}
    </Box>
  );
}
