'use client';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { User } from '@/lib/type';
import { Flex } from '@/components/layout/flex';
import UserAvatar from '@/components/shared/user-avatar';
import { Text } from '@/components/typography/text';
import { formatDistanceToNowStrict } from 'date-fns';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';

const ProfileHoverCard = dynamic(
  () => import('@/components/shared/profile-hover-card'),
  { ssr: false }
);

interface ReplyItemProps {
  id: string;
  content: string;
  createdAt: Date;
  user: User;
}

const ReplyItem = ({ id, content, createdAt, user }: ReplyItemProps) => {
  const repliedAt = useMemo(() => {
    return formatDistanceToNowStrict(new Date(createdAt), {
      addSuffix: true,
    });
  }, [createdAt]);

  const { data: session } = useSession();
  // @ts-ignore
  const userRepliedId = session?.user?.id;

  function handleRemoveReply() {
    toast.promise(
      fetch(`/api/posts/reply`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      }),
      {
        loading: 'Removing reply...',
        success: 'Reply removed!',
        error: 'Failed to remove reply!',
      }
    );
  }

  return (
    <Flex className='gap-3' my={8} align='center'>
      <UserAvatar name={user.name} image={user.image} />
      <Flex direction='column' className='-mt-3' width='full'>
        <Flex align='center' gap={2}>
          <ProfileHoverCard {...user}>
            <Text className='font-semibold'>{user.name}</Text>
          </ProfileHoverCard>
          <Text>&middot;</Text>
          <time
            dateTime={new Date(createdAt).toISOString()}
            className='text-xs text-muted-foreground'
          >
            {repliedAt}
          </time>
        </Flex>
        <Text as='p'>{content}</Text>
      </Flex>
      {userRepliedId === user.id && (
        <Button
          variant='ghost'
          className='text-muted-foreground'
          onClick={handleRemoveReply}
        >
          Remove
        </Button>
      )}
    </Flex>
  );
};

ReplyItem.displayName = 'ReplyItem';
export default ReplyItem;
