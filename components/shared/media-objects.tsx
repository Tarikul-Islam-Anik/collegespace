import { Flex, Text, Box } from '@radix-ui/themes';

interface MediaObjectProps {
  children: React.ReactNode;
  heading: string;
  content: string;
}

const MediaObject = ({ heading, content, children }: MediaObjectProps) => {
  return (
    <Flex className='flex'>
      <Box className='mr-4 flex-shrink-0'>{children}</Box>
      <Box>
        <h4 className='font-medium'>{heading}</h4>
        <Text as='p' className='mt-1 text-sm text-muted-foreground'>
          {content}
        </Text>
      </Box>
    </Flex>
  );
};

MediaObject.displayName = 'MediaObject';
export default MediaObject;
