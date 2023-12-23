'use client';

import useFollower from '@/hooks/useFollower';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UserItem from '../user-item';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Text } from '@/components/typography/text';
import Loader from '../loader';

interface FollowerDialogProps {
  id: string;
  children: React.ReactNode;
}

const FollowerDialog = ({ id, children }: FollowerDialogProps) => {
  const { data, isLoading } = useFollower(id);

  const followers = data?.followers ?? [];
  const followings = data?.follows ?? [];

  const tabsContent = [
    {
      label: 'Followers',
      value: 'followers',
      content: followers,
    },
    {
      label: 'Followings',
      value: 'followings',
      content: followings,
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        {isLoading ? (
          <Loader className='h-96' />
        ) : (
          <Tabs defaultValue='followers' className='mx-auto w-[400px]'>
            <TabsList className='mb-6 grid w-full grid-cols-2'>
              <TabsTrigger value='followers'>Followers</TabsTrigger>
              <TabsTrigger value='followings'>Followings</TabsTrigger>
            </TabsList>

            {tabsContent.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <ul role='followers-list'>
                  <ScrollArea className='h-96 text-center'>
                    {tab.content.length > 0 ? (
                      tab.content.map((item, index) => (
                        <li key={item.id}>
                          {index > 0 && <Separator className='my-2' />}
                          <UserItem user={item} followButton />
                        </li>
                      ))
                    ) : (
                      <Text className='text-muted-foreground'>
                        No {tab.value} yet.
                      </Text>
                    )}
                  </ScrollArea>
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </DialogContent>
    </Dialog>
  );
};

FollowerDialog.displayName = 'FollowerDialog';
export default FollowerDialog;
