import { PostType } from '@/lib/type';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
import PostContent from '@/components/shared/posts/post-content';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { HandleLike, HandleComment, HandleRepost } from './item-actions';
import Link from 'next/link';

const PostItem = ({ post }: { post: PostType }) => {
  const postContent = <PostContent post={post} />;
  const totalLikes = post.likes.length;
  const totalComments = post.comments.length;

  return (
    <Card className='rounded-none border-none pt-5 shadow-none'>
      <CardContent className='pb-2 pl-0'>{postContent}</CardContent>
      <CardFooter className='border-b pb-4 pl-14'>
        <Flex align='center' justify='between' width='full'>
          <Link href={`/post/${post.id}`} passHref>
            <Text as='p' className='text-muted-foreground' size='xs'>
              <Text className='hover:opacity-75'>
                {totalLikes} like{totalLikes > 1 && 's'}
              </Text>
              <Text className='mx-1'>&middot;</Text>
              <Text className='hover:opacity-75'>
                {totalComments} comment{totalComments > 1 && 's '}
              </Text>
            </Text>
          </Link>
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
