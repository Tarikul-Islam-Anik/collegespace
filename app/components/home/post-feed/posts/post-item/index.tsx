import { PostType } from '@/lib/type';
import PostContent from './post-content';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { HandleLike, HandleComment, HandleRepost } from './item-actions';

const PostItem = ({ post }: { post: PostType }) => {
  const postContent = <PostContent post={post} />;
  return (
    <Card className='rounded-none border-none pt-5 shadow-none'>
      <CardContent className='pb-2 pl-0'>{postContent}</CardContent>
      <CardFooter className='border-b pb-4 pl-14'>
        <Flex align='center' justify='between' width='full'>
          <Text as='p' className='text-muted-foreground' size='xs'>
            {post.likes.length} like{post.likes.length > 1 && 's'}
            <Text className='mx-1'>&middot;</Text>
            {post.comments.length} comment{post.comments.length > 1 && 's '}
          </Text>
          <Flex>
            <HandleLike postId={post.id} />
            <HandleRepost />
            <HandleComment postId={post.id} postContent={postContent} />
          </Flex>
        </Flex>
      </CardFooter>
    </Card>
  );
};

PostItem.displayName = 'PostItem';
export default PostItem;
