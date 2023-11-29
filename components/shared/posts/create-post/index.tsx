'use client';

import PostDialog from './post-dialog';
import useUser from '@/hooks/useUser';
import { Button } from '@/components/ui/button';
import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import UserAvatar from '@/components/shared/user-avatar';

const CreatePost = () => {
  const { user } = useUser();
  return (
    <Box className='container'>
      <Flex align='center' justify='between' className='border-b pb-4'>
        <UserAvatar name={user?.name} image={user?.image} />
        <PostDialog />
        <Button disabled>Post</Button>
      </Flex>
    </Box>
  );
};

CreatePost.displayName = 'Post';
export default CreatePost;
