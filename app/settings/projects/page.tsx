'use client';

import { useState } from 'react';
import { Folder } from 'lucide-react';
import dynamic from 'next/dynamic';
import useCurrentUser from '@/hooks/useCurrentUser';
import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import Loader from '@/components/shared/loader';
import EmptyState from '@/components/shared/empty-state';
import FormDialog from '@/components/shared/form-dialog';
import SectionHeading from '../components/section-heading';
import ListContainer from '@/components/shared/list-container';

const ProjectForm = dynamic(() => import('./project-form'), {
  loading: () => <Loader />,
});

export default function SettingsProjectPage() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useCurrentUser();

  const sortedProjects = currentUser?.Project?.sort(
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

  return (
    <Box className='space-y-6'>
      <SectionHeading
        title='Projects'
        description='Showcase your projects and let people know what you are working on.'
      />

      {sortedProjects?.length === 0 ? (
        <EmptyState
          title='No projects added yet'
          description='Add your projects to showcase them to the world.'
          icon={<Folder className='h-12 w-12' />}
        >
          {AddNew}
        </EmptyState>
      ) : (
        sortedProjects && (
          <ListContainer type='project' items={sortedProjects} />
        )
      )}

      {sortedProjects?.length! > 0 && (
        <Flex justify='center'>{AddNew}</Flex>
      )}
    </Box>
  );
}
