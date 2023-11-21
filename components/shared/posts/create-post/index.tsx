'use client';

import PostDialog from './post-dialog';
import useCurrentUser from '@/hooks/useCurrentUser';
import { Button } from '@/components/ui/button';
import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import UserAvatar from '@/components/shared/user-avatar';

const CreatePost = () => {
  const { currentUser } = useCurrentUser();
  return (
    <Box className='container'>
      <Flex align='center' justify='between' className='border-b pb-4'>
        <UserAvatar name={currentUser?.name} image={currentUser?.image} />
        <PostDialog />
        <Button disabled>Post</Button>
      </Flex>
    </Box>
  );
};

CreatePost.displayName = 'Post';
export default CreatePost;
