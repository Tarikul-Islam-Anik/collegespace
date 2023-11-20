'use client';
import useJobs from '@/hooks/useJobs';
import { Container } from '@/components/layout/container';
import JobList from '@/components/shared/job-list';
import SectionHeading from '@/components/shared/section-heading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Loader from '@/components/shared/loader';

const StudentView = () => {
  const { data, isLoading } = useJobs();

  return (
    <Container>
      <SectionHeading
        title='Jobs & Bounties'
        description='Find all types of jobs and bounties for only for you.'
      />
      <Tabs defaultValue='jobs' className='mx-auto mt-4'>
        <TabsList className='mb-4 grid w-full grid-cols-2'>
          <TabsTrigger value='jobs'>Jobs</TabsTrigger>
          <TabsTrigger value='bounty'>Bounty</TabsTrigger>
        </TabsList>
        <TabsContent value='jobs'>
          {isLoading ? <Loader /> : data && <JobList jobs={data.jobs} />}
        </TabsContent>
        <TabsContent value='bounty'>Bounty post here</TabsContent>
      </Tabs>
    </Container>
  );
};

StudentView.displayName = 'StudentView';
export default StudentView;
