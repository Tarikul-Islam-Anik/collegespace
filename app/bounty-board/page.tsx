import { Button, buttonVariants } from '@/components/ui/button';
import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import BountyList from './components/bounty-list';
import { AddCircle, Back } from 'iconsax-react';
import Link from 'next/link';

const BountyBoardPage = () => {
  return (
    <Flex direction='column' className='container' gap='6' pt='9' pb='4'>
      <Box mr='auto'>
        <Link href='/authentication' className={buttonVariants({ variant: 'ghost' })}>
          <Back className='h-5 w-5' />
          <Text ml='2'>Back</Text>
        </Link>
      </Box>
      <Flex direction='column' gap='4'>
        <Heading as='h1' size='8' align='center'>
          Bounty Board
        </Heading>
        <Text align='center' mx='auto' className='w-1/2'>
          These are created by students and startups. The bounties that are
          currently available for you to work on. If you see something you like,
          click the Apply button to get started.
        </Text>
      </Flex>
      <Box ml='auto'>
        <Button>
          <AddCircle className='h-5 w-5' />
          <Text ml='2'>Add Bounty</Text>
        </Button>
      </Box>
      <BountyList />
    </Flex>
  );
};

export default BountyBoardPage;
