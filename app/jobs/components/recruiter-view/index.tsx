'use client';

import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Container } from '@/components/layout/container';
import SectionHeading from '@/components/shared/section-heading';
import RecruiterTabs from './recruiter-tabs';
import Loader from '@/components/shared/loader';
import EmptyState from '@/components/shared/empty-state';
import { DocumentText1 } from 'iconsax-react';
import FormDialog from '@/components/shared/form-dialog';
import { buttonVariants } from '@/components/ui/button';
import useJobs from '@/hooks/useJobs';
import useCurrentUser from '@/hooks/useCurrentUser';

const JobForm = dynamic(() => import('./job-form'), {
  ssr: false,
  loading: () => <Loader />,
});

const RecruiterView = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useCurrentUser();
  const { data, isLoading } = useJobs(currentUser?.company?.id);

  if (isLoading) return <Loader className='h-96' />;

  const AddNew = (
    <FormDialog
      open={open}
      setOpen={setOpen}
      title='Add a new job'
      label='Add job'
      description='Create a new hiring post for your company.'
    >
      {currentUser?.company.id && (
        <JobForm setOpen={setOpen} companyId={currentUser?.company.id} />
      )}
    </FormDialog>
  );

  const companyDetailsMissing = !currentUser?.company;
  const jobs = data?.jobs;
  return (
    <Container>
      <SectionHeading
        title='Hire brilliant minds'
        description='Post jobs and easily reach out to the best candidates.'
      />

      {jobs ? (
        <RecruiterTabs addNew={AddNew} jobs={jobs} />
      ) : (
        <EmptyState
          icon={<DocumentText1 className='h-12 w-12' />}
          title={
            companyDetailsMissing
              ? 'Add your company details'
              : 'No jobs posted yet'
          }
          description={
            companyDetailsMissing
              ? 'Fill in your company details before posting a job.'
              : 'Post your first job and start hiring.'
          }
        >
          {companyDetailsMissing ? (
            <Link
              href='/settings/company'
              className={buttonVariants({ variant: 'outline' })}
            >
              Fill in your company details
            </Link>
          ) : (
            AddNew
          )}
        </EmptyState>
      )}
    </Container>
  );
};

RecruiterView.displayName = 'RecruiterView';
export default RecruiterView;
