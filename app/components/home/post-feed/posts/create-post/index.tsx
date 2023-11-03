'use client';
import PostDialog from './post-dialog';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import UserAvatar from '@/components/shared/user-avatar';

const CreatePost = () => {
  const { data: session } = useSession();
  return (
    <Box className='container'>
      <Flex align='center' justify='between' className='border-b pb-4'>
        <UserAvatar name={session?.user?.name} image={session?.user?.image} />
        <PostDialog />
        <Button disabled>Post</Button>
      </Flex>
    </Box>
  );
};

CreatePost.displayName = 'Post';
export default CreatePost;
