import { Container } from '@/components/layout/container';
import Posts from '@/components/shared/posts';
import CreatePost from '@/components/shared/posts/create-post';
import { Flex } from '@/components/layout/flex';

const PostFeed = () => {
  return (
    <Container>
      <Flex direction='column' gap={4}>
        <CreatePost />
        <Posts />
      </Flex>
    </Container>
  );
};

PostFeed.displayName = 'PostFeed';
export default PostFeed;
