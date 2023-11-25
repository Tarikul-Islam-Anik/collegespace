'use client';

import Link from 'next/link';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import { DocumentText1 } from 'iconsax-react';
import useCompany from '@/hooks/useCompany';
import RecruiterTabs from './recruiter-tabs';
import Loader from '@/components/shared/loader';
import { buttonVariants } from '@/components/ui/button';
import EmptyState from '@/components/shared/empty-state';
import FormDialog from '@/components/shared/form-dialog';
import { Container } from '@/components/layout/container';
import SectionHeading from '@/components/shared/section-heading';

const JobForm = dynamic(() => import('./job-form'), {
  ssr: false,
  loading: () => <Loader />,
});

const RecruiterView = () => {
  const [open, setOpen] = useState(false);
  const { company, isLoading } = useCompany();
  const { data: session } = useSession();

  if (isLoading) return <Loader className='h-[80vh]' />;

  const AddNew = (
    <FormDialog
      open={open}
      setOpen={setOpen}
      title='Add a new job'
      label='Add job'
      description='Create a new hiring post for your company.'
    >
      {company?.id && <JobForm setOpen={setOpen} companyId={company?.id} />}
    </FormDialog>
  );

  const companyDetailsMissing = !company;

  const jobs = company?.jobs?.map((job) => {
    return {
      ...job,
      company: {
        name: company.name,
        // @ts-ignore
        isOwner: company.ownerId === session?.user?.id,
      },
    };
  });

  return (
    <Container>
      <SectionHeading
        title='Hire brilliant minds'
        description='Post jobs and easily reach out to the best candidates.'
      />

      {jobs && jobs?.length > 0 ? (
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
