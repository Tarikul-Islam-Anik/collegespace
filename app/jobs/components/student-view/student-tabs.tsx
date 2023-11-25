'use client';
import useJobs from '@/hooks/useJobs';
import Loader from '@/components/shared/loader';
import JobList from '@/components/shared/job-list';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CreateBounty from './create-bounty';

const StudentTabs = () => {
  const { data, isLoading } = useJobs();

  return (
    <Tabs defaultValue='jobs' className='mx-auto mt-4'>
      <TabsList className='mb-4 grid w-full grid-cols-3'>
        <TabsTrigger value='jobs'>Jobs</TabsTrigger>
        <TabsTrigger value='bounties'>Bounties</TabsTrigger>
        <TabsTrigger value='add-bounty'>Add Bounty</TabsTrigger>
      </TabsList>
      <TabsContent value='jobs'>
        {isLoading ? <Loader /> : data && <JobList jobs={data.jobs} />}
      </TabsContent>
      <TabsContent value='bounties'>Bounty post here</TabsContent>
      <TabsContent value='add-bounty'>
        <CreateBounty />
      </TabsContent>
    </Tabs>
  );
};

StudentTabs.displayName = 'StudentTabs';
export default StudentTabs;
