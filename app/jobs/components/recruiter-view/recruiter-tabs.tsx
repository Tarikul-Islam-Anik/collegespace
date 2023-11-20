import { JobType } from '@/lib/type';
import { Flex } from '@/components/layout/flex';
import JobList from '@/components/shared/job-list';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface RecruiterTabsProps {
  addNew?: React.ReactNode;
  jobs: JobType[];
}

const RecruiterTabs = ({ addNew, jobs }: RecruiterTabsProps) => {
  const activeJobs = jobs?.filter((job) => new Date(job.deadline) > new Date());
  const archivedJobs = jobs?.filter(
    (job) => new Date(job.deadline) < new Date()
  );

  const tabsContent = [
    {
      value: 'active',
      content: activeJobs as JobType[],
    },
    {
      value: 'archived',
      content: archivedJobs as JobType[],
    },
  ];

  return (
    <Tabs defaultValue='active' className='mx-auto mt-4'>
      <TabsList className='mb-8 grid w-full grid-cols-2'>
        {tabsContent.map(({ value }) => (
          <TabsTrigger
            key={value}
            value={value}
            className='capitalize'
            disabled={value === 'archived' && archivedJobs.length === 0}
          >
            {value}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsContent.map(({ value, content }) => (
        <TabsContent key={value} value={value}>
          <JobList jobs={content as JobType[]} />
        </TabsContent>
      ))}
      <Flex justify='center' mt={8}>
        {addNew}
      </Flex>
    </Tabs>
  );
};

RecruiterTabs.displayName = 'RecruiterTabs';
export default RecruiterTabs;
