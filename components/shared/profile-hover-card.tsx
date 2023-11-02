import Link from 'next/link';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Flex, Text, Box } from '@radix-ui/themes';
import { Calendar } from 'iconsax-react';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import UserAvatar from '@/components/shared/user-avatar';

interface ProfileHoverCardProps {
  id: string;
  name: string | null;
  image: string | null;
  bio?: string | null;
  createdAt: Date | null;
  children: React.ReactNode;
  className?: string;
}

const ProfileHoverCard = ({
  id,
  name,
  image,
  bio,
  createdAt,
  children,
  className,
}: ProfileHoverCardProps) => {
  return (
    <HoverCard openDelay={200} closeDelay={200}>
      <HoverCardTrigger asChild>
        <Button variant='link' className='px-0 text-inherit'>
          {children}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className={cn(className, 'w-80')}>
        <Flex direction='column' gap='4'>
          <Flex gap='4' justify='between'>
            <UserAvatar name={name} image={image} />
            <Box className='min-w-[230px] space-y-1'>
              <h4 className='text-sm font-semibold'>{name}</h4>
              <Text
                size='1'
                className={cn(
                  !bio && 'italic text-muted-foreground',
                  'line-clamp-3'
                )}
              >
                {bio ? bio : 'No bio provided'}
              </Text>
              <Flex align='center' pt='2'>
                <Calendar className='mr-2 h-4 w-4 opacity-70' />{' '}
                <Text className='text-xs text-muted-foreground'>
                  Joined{' '}
                  {createdAt && format(new Date(createdAt), 'dd, MMMM yyyy')}
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Link
            href={`user/${id}`}
            className={cn(buttonVariants({ variant: 'default' }), 'w-full')}
          >
            View profile
          </Link>
        </Flex>
      </HoverCardContent>
    </HoverCard>
  );
};

ProfileHoverCard.displayName = 'HoverCardDemo';
export default ProfileHoverCard;
