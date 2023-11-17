import FollowersCount from './followers-count';
import { Flex } from '@/components/layout/flex';
import useCurrentUser from '@/hooks/useCurrentUser';

const UserStats = () => {
  const { currentUser } = useCurrentUser();

  return (
    <Flex direction='column'>
      <FollowersCount
        id={currentUser?.id!}
        count={currentUser?._count?.followers!}
      />
    </Flex>
  );
};

UserStats.displayName = 'UserStats';
export default UserStats;
