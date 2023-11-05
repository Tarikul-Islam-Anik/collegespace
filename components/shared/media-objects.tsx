import { Box } from '../layout/box';
import { Flex } from '../layout/flex';
import { Heading } from '../typography/heading';
import { Text } from '../typography/text';

interface MediaObjectProps {
  children: React.ReactNode;
  heading: string;
  content: string;
}

const MediaObject = ({ heading, content, children }: MediaObjectProps) => {
  return (
    <Flex>
      <Box mr={4} className='flex-shrink-0'>
        {children}
      </Box>
      <Box>
        <Heading weight='medium'>{heading}</Heading>
        <Text
          size='sm'
          color='muted-foreground'
          as='p'
          className='mt-1'
        >
          {content}
        </Text>
      </Box>
    </Flex>
  );
};

MediaObject.displayName = 'MediaObject';
export default MediaObject;
