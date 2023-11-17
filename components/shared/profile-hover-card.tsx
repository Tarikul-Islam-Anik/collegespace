import { forwardRef } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { User, UserType } from '@/lib/type';
import { Calendar } from 'iconsax-react';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
import UserAvatar from '@/components/shared/user-avatar';
import { Heading } from '@/components/typography/heading';

interface ProfileHoverCardProps extends Partial<UserType> {
  children: React.ReactNode;
  className?: string;
}

const ProfileHoverCard = forwardRef(
  (
    {
      children,
      name,
      username,
      bio,
      image,
      createdAt,
      email,
      className,
    }: ProfileHoverCardProps,
    ref
  ) => {
    return (
      <HoverCard openDelay={200} closeDelay={200}>
        <HoverCardTrigger
          asChild
          ref={ref as React.RefObject<HTMLAnchorElement>}
        >
          <Button variant='link' className='h-7 justify-start p-0 text-inherit'>
            {children}
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className={cn(className, 'w-80')}>
          <Flex direction='column' gap={4}>
            <Flex gap={4} justify='between'>
              <UserAvatar name={name} image={image} />
              <Box className='min-w-[230px] space-y-1'>
                <Flex className='gap-1.5' mb={2} align='center'>
                  <Heading as='h4' size='sm' weight='semibold'>
                    {name}
                  </Heading>
                  {username && (
                    <Text
                      className={cn(
                        buttonVariants({
                          variant: 'secondary',
                          size: 'sm',
                        }),
                        'h-6 rounded px-1'
                      )}
                      size='xs'
                    >{`@${username}`}</Text>
                  )}
                </Flex>
                <Text
                  size='xs'
                  className={cn(
                    !bio && 'italic text-muted-foreground',
                    'line-clamp-3'
                  )}
                >
                  {bio ? bio : 'No bio provided'}
                </Text>
                <Flex align='center' pt={2}>
                  <Calendar className='mr-2 h-4 w-4 opacity-70' />{' '}
                  <Text size='xs' color='muted-foreground'>
                    Joined{' '}
                    {createdAt && format(new Date(createdAt), 'dd, MMMM yyyy')}
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Link
              href={`/profile/${email}`}
              className={cn(buttonVariants({ variant: 'default' }), 'w-full')}
            >
              View profile
            </Link>
          </Flex>
        </HoverCardContent>
      </HoverCard>
    );
  }
);

ProfileHoverCard.displayName = 'HoverCardDemo';
export default ProfileHoverCard;
