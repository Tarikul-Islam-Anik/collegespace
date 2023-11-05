import { Box } from '@/components/layout/box';
import CreateAccount from './create-account';
import SSO from './sso';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';

const ContinueWith = () => {
  return (
    <>
      <Box position='relative'>
        <Flex position='absolute' align='center' className='inset-0'>
          <Box className='w-full border-t' />
        </Flex>
        <Flex justify='center' position='relative'>
          <Text
            size='xs'
            className='bg-background px-2 uppercase text-muted-foreground'
          >
            Or continue with
          </Text>
        </Flex>
      </Box>
      <Flex direction='column' gap={4}>
        <SSO />
        <CreateAccount />
      </Flex>
    </>
  );
};

export default ContinueWith;
