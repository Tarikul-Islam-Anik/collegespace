'use client';
import { JobType } from '@/lib/type';
import useJobs from '@/hooks/useJobs';
import Loader from '@/components/shared/loader';
import JobList from '@/components/shared/job-list';
import CreateBounty from './create-bounty';
import BountyList from '@/components/shared/bounty-list';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const StudentTabs = () => {
  const { data, isLoading } = useJobs();

  const jobs = data?.jobs.map((job) => {
    return {
      ...job,
      company: {
        name: job.company_name,
        isOwner: false,
      },
    };
  });

  return (
    <Tabs defaultValue='jobs' className='mx-auto mt-4'>
      <TabsList className='mb-4 grid w-full grid-cols-3'>
        <TabsTrigger value='jobs'>Jobs</TabsTrigger>
        <TabsTrigger value='bounties'>Bounties</TabsTrigger>
        <TabsTrigger value='add-bounty'>Add Bounty</TabsTrigger>
      </TabsList>
      <TabsContent value='jobs'>
        {isLoading ? <Loader /> : data && <JobList jobs={jobs as JobType[]} />}
      </TabsContent>
      <TabsContent value='bounties'>
        <BountyList />
      </TabsContent>
      <TabsContent value='add-bounty'>
        <CreateBounty />
      </TabsContent>
    </Tabs>
  );
};

StudentTabs.displayName = 'StudentTabs';
export default StudentTabs;
