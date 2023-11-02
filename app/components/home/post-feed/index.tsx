import { Flex } from '@radix-ui/themes';
import CreatePost from './posts/create-post';
import Posts from './posts';

const PostFeed = () => {
  return (
    <Flex direction='column' gap='4'>
      <CreatePost />
      <Posts />
    </Flex>
  );
};

PostFeed.displayName = 'PostFeed';
export default PostFeed;
