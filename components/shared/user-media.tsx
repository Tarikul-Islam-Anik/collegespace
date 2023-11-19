import Image from 'next/image';
import { Box } from '@/components/layout/box';
import { CardHeader } from '@/components/ui/card';
import UserAvatar from '@/components/shared/user-avatar';

const UserMedia = ({
  name,
  image,
  coverImage,
}: {
  name: string;
  image: string;
  coverImage: string;
}) => {
  return (
    <CardHeader className='relative p-0 pb-4'>
      <Box className='h-28'>
        {coverImage && (
          <Image
            width={256}
            height={50}
            alt={name + ' cover image'}
            src={coverImage ?? ''}
            className='h-28 w-full object-cover'
            priority
          />
        )}
      </Box>
      <Box
        position='absolute'
        className='-bottom-8 left-1/2 -translate-x-1/2  transform rounded-full border-2 border-muted'
      >
        <UserAvatar className='h-24 w-24' name={name} image={image} />
      </Box>
    </CardHeader>
  );
};

UserMedia.displayName = 'UserMedia';
export default UserMedia;
