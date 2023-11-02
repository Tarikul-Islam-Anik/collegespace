'use client';
import { Flex, Box } from '@radix-ui/themes';
import { Button } from '@/components/ui/button';
import PostDialog from './post-dialog';
import UserAvatar from '@/components/shared/user-avatar';
import { useSession } from 'next-auth/react';

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
