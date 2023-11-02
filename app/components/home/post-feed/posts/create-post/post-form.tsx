'use client';

import * as z from 'zod';
import axios from 'axios';
import { toast } from 'sonner';
import { useAtom } from 'jotai/react';
import { PostsAtom } from '@/lib/atom';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { Flex, Box, Text } from '@radix-ui/themes';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import PostAddons from './post-addons';
import PostType from './post-type';
import { Form } from '@/components/ui/form';
import UserAvatar from '@/components/shared/user-avatar';
import PostContentField from './post-content-field';

export const postFormSchema = z.object({
  content: z.string().trim().min(1).max(256),
  type: z.enum(['thought', 'question', 'project']),
});

const PostForm = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const { data: session } = useSession();
  const [posts, setPosts] = useAtom(PostsAtom);
  const form = useForm<z.infer<typeof postFormSchema>>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      type: 'thought',
    },
  });

  function onSubmit(data: z.infer<typeof postFormSchema>) {
    setOpen(false);
    toast.promise(
      axios.post('/api/posts/new', data).then((res) => {
        setPosts([res.data, ...posts!]);
        form.reset();
      }),
      {
        loading: `Posting ${data.type}...`,
        success: 'Status posted!',
        error: 'Something went wrong!',
      }
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <Flex>
          <UserAvatar name={session?.user?.name} image={session?.user?.image} />
          <Flex direction='column' className='ml-4 w-full'>
            <Text as='p' className='font-medium'>
              {session?.user?.name}
            </Text>
            <PostContentField form={form} />
          </Flex>
        </Flex>
        <Flex align='center' justify='between'>
          <Flex align='center'>
            <PostType form={form} />
            <Box className='ml-2 h-6 border-l-2 border-muted' />
            <PostAddons />
          </Flex>
          <Flex align='center' className='space-x-2'>
            <Text className='text-sm text-destructive'>
              {form.watch?.('content')?.length === 256 &&
                form.watch?.('content')?.length}
            </Text>
            <Button
              type='submit'
              disabled={!form.formState.isValid || form.formState.isSubmitting}
            >
              Post
            </Button>
          </Flex>
        </Flex>
      </form>
    </Form>
  );
};

PostForm.displayName = 'PostForm';
export default PostForm;
