import Image from 'next/image';
import { Box } from '@/components/layout/box';
import { CardHeader } from '@/components/ui/card';
import useCurrentUser from '@/hooks/useCurrentUser';
import UserAvatar from '@/components/shared/user-avatar';

const UserMedia = () => {
  const { currentUser } = useCurrentUser();

  return (
    <CardHeader className='relative p-0 pb-4'>
      <Box className='h-28'>
        {currentUser?.coverImage && (
          <Image
            width={256}
            height={50}
            alt={currentUser?.name + ' cover image'}
            src={currentUser?.coverImage ?? ''}
            className='h-28 w-full object-cover'
            priority
          />
        )}
      </Box>
      <Box
        position='absolute'
        className='-bottom-8 left-1/2 -translate-x-1/2  transform rounded-full border-2 border-muted'
      >
        <UserAvatar
          className='h-24 w-24'
          name={currentUser?.name}
          image={currentUser?.image}
        />
      </Box>
    </CardHeader>
  );
};

UserMedia.displayName = 'UserMedia';
export default UserMedia;
