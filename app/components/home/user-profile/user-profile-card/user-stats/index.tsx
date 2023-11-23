import useUser from '@/hooks/useUser';
import { Flex } from '@/components/layout/flex';
import FollowersCount from './followers-count';

const UserStats = () => {
  const { user } = useUser();

  return (
    <Flex direction='column' className='max-h-16'>
      <FollowersCount id={user?.id!} count={user?._count?.followers!} />
    </Flex>
  );
};

UserStats.displayName = 'UserStats';
export default UserStats;
