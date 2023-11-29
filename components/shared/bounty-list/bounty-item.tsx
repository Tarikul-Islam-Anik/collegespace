'use client';
import { format } from 'date-fns';
import { Sparkles } from 'lucide-react';
import { BountyType } from '@/lib/type';
import { Calendar, User } from 'iconsax-react';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
import ProfileHoverCard from '../profile-hover-card';
import { Heading } from '@/components/typography/heading';
import BountyActions from './bounty-actions';

const BountyItem = ({ bounty }: { bounty: BountyType }) => {
  return (
    <Flex justify='between' align={'center'} className='space-x-1' width='full'>
      <Flex direction='column' gap={2}>
        <Heading as='h3' weight='medium'>
          {bounty.title}
        </Heading>
        <Text
          as='p'
          color='muted-foreground'
          size='sm'
          className='line-clamp-3'
        >
          {bounty.description}
        </Text>
        <Flex align='center' className='text-sm text-muted-foreground'>
          <Text as='p' className='mr-1 inline-flex items-center'>
            <Sparkles className='mr-1 h-4 w-4' />
            <Text className='mx-0.5'>Reward:</Text>
            <Text className='tabular-nums'>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'BDT',
                minimumFractionDigits: 0,
                currencyDisplay: 'narrowSymbol',
              }).format(bounty.reward)}
            </Text>
          </Text>
          <Text size='xs' className='ml-1 mr-1.5'>
            &bull;
          </Text>
          <Text as='p' className='inline-flex items-center'>
            <Calendar className='mr-1 h-4 w-4' />
            <Text className='mx-0.5'>Deadline:</Text>
            <time dateTime={new Date(bounty.deadline).toISOString()}>
              {format(new Date(bounty.deadline), 'MMM dd, yyyy')}
            </time>
          </Text>
          {bounty?.user && (
            <>
              <Text size='xs' className='mx-1.5'>
                &bull;
              </Text>
              <ProfileHoverCard {...bounty.user}>
                <Text as='p' className='inline-flex items-center'>
                  <User className='mr-1 h-4 w-4' />
                  {bounty.user?.name}
                </Text>
              </ProfileHoverCard>
            </>
          )}
        </Flex>
      </Flex>
      <BountyActions bounty={bounty} />
    </Flex>
  );
};

BountyItem.displayName = 'BountyItem';
export default BountyItem;
