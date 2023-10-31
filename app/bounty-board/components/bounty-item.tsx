import { Button, buttonVariants } from '@/components/ui/button';
import { Flex, Heading, Text } from '@radix-ui/themes';

const BountyItem = () => {
  return (
    <Flex justify='between' align='center' py='6' className='border-b'>
      <Flex align='center' gap='4'>
        <Heading as='h3' size='4' weight='medium' className='max-w-[35rem] truncate'>
          Bounty title
        </Heading>
        <Text className={buttonVariants({ variant: 'secondary' })}>
          Due on October 31, 2023
        </Text>
      </Flex>
      <Flex align='center' justify='center' gap='9'>
        <Flex direction='column' gap='1'>
          <Text as='p' weight='medium'>
            $25,000
          </Text>
          <Text size='2' className='text-muted-foreground'>
            Bounty value
          </Text>
        </Flex>
        <Button variant='outline'>Apply</Button>
      </Flex>
    </Flex>
  );
};

BountyItem.displayName = 'BountyItem';
export default BountyItem;
