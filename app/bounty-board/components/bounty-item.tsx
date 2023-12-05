'use client';
import { toast } from 'sonner';
import { Flex } from '@/components/layout/flex';
import { Heading } from '@/components/typography/heading';
import { Text } from '@/components/typography/text';
import { Button, buttonVariants } from '@/components/ui/button';
import { format } from 'date-fns';

const BountyItem = ({
  title,
  reward,
  deadline,
}: {
  title: string;
  reward: string;
  deadline: string;
}) => {
  return (
    <Flex justify='between' align='center' py={8} className='border-b'>
      <Flex align='center' gap={4}>
        <Heading
          as='h3'
          size='sm'
          weight='medium'
          className='w-72 md:w-full truncate md:text-xl'
        >
          {title}
        </Heading>
        <Text
          className={
            buttonVariants({ variant: 'secondary' }) + ' hidden md:block'
          }
        >
          Due on {format(new Date(deadline), 'MMM dd, yyyy')}
        </Text>
      </Flex>
      <Flex align='center' justify='center' className='md:gap-9 gap-4'>
        <Flex direction='column'>
          <Text as='p' weight='medium'>
            {reward}
          </Text>
          <Text size='sm' className='ml-1 text-muted-foreground'>
            Bounty value
          </Text>
        </Flex>
        <Button
          variant='outline'
          onClick={() => {
            toast.error(
              'You need to be logged in to apply for bounties. Login or create an account to continue.'
            );
          }}
        >
          Apply
        </Button>
      </Flex>
    </Flex>
  );
};

BountyItem.displayName = 'BountyItem';
export default BountyItem;
