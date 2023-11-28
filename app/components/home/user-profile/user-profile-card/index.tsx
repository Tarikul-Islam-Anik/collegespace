'use client';

import useUser from '@/hooks/useUser';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import UpgradeToPremium from '@/components/shared/upgrade-to-premium';
import { Flex } from '@/components/layout/flex';
import { Heading } from '@/components/typography/heading';
import { Text } from '@/components/typography/text';
import UserMedia from '@/components/shared/user-media';
import UserStats from './user-stats';
import CompletedProfileButton from './complete-profile-button';

const UserProfileCard = () => {
  const { user } = useUser();

  const completedProfile = user?.image && user?.coverImage && user?.bio;

  return (
    <Card className='isolate h-auto w-64 overflow-hidden shadow-none'>
      <UserMedia
        name={user?.name!}
        image={user?.image!}
        coverImage={user?.coverImage!}
      />
      <CardContent className='mt-12 w-full px-0'>
        <Flex align='center' justify='center' direction='column' px={4}>
          <Heading size='lg' as='h2' weight='medium'>
            {user?.name}
          </Heading>
          <Text
            as='p'
            size='xs'
            align='center'
            className='line-clamp-3 text-muted-foreground'
          >
            {user?.bio ?? 'No bio provided'}
          </Text>
        </Flex>
        <Separator className='mt-4 w-full' />
        <UserStats />
        {!completedProfile && (
          <>
            <Separator className='mb-4 w-full' />
            <CompletedProfileButton />
          </>
        )}
        <Separator className='my-4 w-full' />
        <UpgradeToPremium />
      </CardContent>
    </Card>
  );
};

UserProfileCard.displayName = 'UserProfileCard';
export default UserProfileCard;
