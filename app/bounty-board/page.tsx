import { Button, buttonVariants } from '@/components/ui/button';
import BountyList from './components/bounty-list';
import { AddCircle, Back } from 'iconsax-react';
import Link from 'next/link';
import { Flex } from '@/components/layout/flex';
import { Box } from '@/components/layout/box';
import { Text } from '@/components/typography/text';
import { Heading } from '@/components/typography/heading';

const BountyBoardPage = () => {
  return (
    <Flex direction='column' className='container pt-9' mx='auto' px={2}  gap={4} pb={4}>
      <Box mr='auto'>
        <Link
          href='/authentication'
          className={buttonVariants({ variant: 'ghost' })}
        >
          <Back className='h-5 w-5' />
          <Text className='ml-2'>Back</Text>
        </Link>
      </Box>
      <Flex direction='column' gap={4}>
        <Heading as='h1' size='3xl' weight='bold' align='center'>
          Bounty Board
        </Heading>
        <Text align='center' className='mx-auto md:w-1/2'>
          These are created by students and startups. The bounties that are
          currently available for you to work on. If you see something you like,
          click the Apply button to get started.
        </Text>
      </Flex>
      <Box ml='auto'>
        <Button>
          <AddCircle className='h-5 w-5' />
          <Text className='ml-2'>Add Bounty</Text>
        </Button>
      </Box>
      <BountyList />
    </Flex>
  );
};

export default BountyBoardPage;
