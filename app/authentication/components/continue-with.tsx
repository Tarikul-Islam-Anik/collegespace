import { Box, Flex, Text } from '@radix-ui/themes';
import CreateAccount from './create-account';
import SSO from './sso';

const ContinueWith = () => {
  return (
    <>
      <Box className='relative'>
        <Flex position='absolute' align='center' inset='0'>
          <Box className='w-full border-t' />
        </Flex>
        <Flex justify='center' position='relative'>
          <Text
            size='1'
            className='bg-background px-2 uppercase text-muted-foreground'
          >
            Or continue with
          </Text>
        </Flex>
      </Box>
      <Flex direction='column' gap='3'>
        <SSO />
        <CreateAccount />
      </Flex>
    </>
  );
};

export default ContinueWith;
