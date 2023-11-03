import { Flex } from '@/components/layout/flex';
import { Heading } from '@/components/typography/heading';
import { Text } from '@/components/typography/text';
import { Button, buttonVariants } from '@/components/ui/button';

const BountyItem = () => {
  return (
    <Flex justify='between' align='center' py={8} className='border-b'>
      <Flex align='center' gap={4}>
        <Heading
          as='h3'
          size='xl'
          weight='medium'
          className='max-w-[35rem] truncate'
        >
          Bounty title
        </Heading>
        <Text className={buttonVariants({ variant: 'secondary' })}>
          Due on October 31, 2023
        </Text>
      </Flex>
      <Flex align='center' justify='center' className='gap-9'>
        <Flex direction='column'>
          <Text as='p' weight='medium'>
            $25,000
          </Text>
          <Text size='sm' className='ml-1 text-muted-foreground'>
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
