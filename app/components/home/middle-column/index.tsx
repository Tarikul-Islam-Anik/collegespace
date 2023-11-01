import { Flex } from '@radix-ui/themes';
import CreatePost from './posts/create-post';
import Posts from './posts';
const MiddleColumn = () => {
  return (
    <Flex direction='column' gap='4'>
      <CreatePost />
      <Posts />
    </Flex>
  );
};

MiddleColumn.displayName = 'MiddleColumn';
export default MiddleColumn;
