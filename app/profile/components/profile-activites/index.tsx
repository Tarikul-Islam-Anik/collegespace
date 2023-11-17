import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UserRecentPosts from './user-recent-posts';
import UserReplies from './user-replies';
import UserReposts from './user-reposts.';

const tabsContent = [
  {
    name: 'recent',
    component: UserRecentPosts,
  },
  {
    name: 'replies',
    component: UserReplies,
  },
  {
    name: 'reposts',
    component: UserReposts,
  },
];

const ProfileActivities = ({ email }: { email: string }) => {
  return (
    <Tabs
      defaultValue='recent'
      className='mx-auto flex w-full flex-col items-center'
    >
      <TabsList className='w-full justify-around rounded-none border-b bg-transparent p-0'>
        {['recent', 'replies', 'reposts'].map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab}
            className='w-full rounded-none pb-2 data-[state=active]:border-b-4 data-[state=active]:bg-transparent data-[state=active]:shadow-none'
          >
            {tab[0].toUpperCase() + tab.slice(1)}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsContent.map((tab) => (
        <TabsContent key={tab.name} value={tab.name} className='w-full'>
          <tab.component email={email} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

ProfileActivities.displayName = 'ProfileActivities';
export default ProfileActivities;
