import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const JobsPage = () => {
  return (
    <Tabs defaultValue='jobs' className='mx-auto mt-4'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='jobs'>Jobs</TabsTrigger>
        <TabsTrigger value='bounty'>Bounty</TabsTrigger>
      </TabsList>
      <TabsContent value='jobs'>Job post here</TabsContent>
      <TabsContent value='bounty'>Bounty post here</TabsContent>
    </Tabs>
  );
};

export default JobsPage;
