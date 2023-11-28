import Link from 'next/link';
import { User } from '@/lib/type';
import { Flex } from '../../layout/flex';
import UserAvatar from '../user-avatar';
import { buttonVariants } from '../../ui/button';

const ApplicantItem = ({ user }: { user: Partial<User> }) => {
  return (
    <Flex justify='between' align='center'>
      <Flex align='center'>
        <UserAvatar name={user.name} image={user.image} />
        <Flex direction='column' className='ml-2'>
          <Link href={'/profile/' + user.email}>{user.name}</Link>
        </Flex>
      </Flex>
      <Link
        href={'/cv/' + user.email}
        target='_blank'
        className={buttonVariants({ variant: 'outline', size: 'sm' })}
      >
        View CV
      </Link>
    </Flex>
  );
};

ApplicantItem.displayName = 'ApplicantItem';
export default ApplicantItem;
