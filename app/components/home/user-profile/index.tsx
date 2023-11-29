import { Flex } from '@/components/layout/flex';
import UserProfileCard from './user-profile-card';

const UserProfile = () => {
  return (
    <Flex direction='column' gap={4} align='end'>
      <UserProfileCard />
    </Flex>
  );
};

UserProfile.displayName = 'UserProfile';
export default UserProfile;
