'use client';

import { useState } from 'react';
import { useAtom } from 'jotai';
import { Heart } from 'iconsax-react';
import { PostsAtom } from '@/lib/atom';
import useLike from '@/hooks/useLike';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import ScreenReaderOnly from '@/components/ui/screen-reader-only';

const HandleLike = ({ postId }: { postId: string }) => {
  const { toggleLike } = useLike(postId);
  const [posts, setPosts] = useAtom(PostsAtom);
  const { data: session } = useSession();

  // @ts-ignore
  const userId = session?.user?.id;
  const post = posts?.find((post) => post.id === postId);

  const [liked, setLiked] = useState(
    post?.likes.some((like) => like.userId === userId)
  );

  async function handleLike() {
    setPosts((prev) => {
      const posts = [...prev!];
      const postIndex = posts.findIndex((post) => post.id === postId);
      const post = posts[postIndex];

      if (liked) {
        post.likes = post.likes.filter((like) => like.userId !== userId);
      } else {
        post.likes.push({
          userId: userId as string,
          postId: post.id,
        });
      }

      posts[postIndex] = post;
      setLiked(!liked);
      return posts;
    });
    await toggleLike();
  }

  return (
    <Button variant='ghost' size='icon' onClick={handleLike}>
      <Heart
        variant={liked ? 'Bold' : 'Outline'}
        className={liked ? 'text-primary' : 'text-muted-foreground'}
      />
      <ScreenReaderOnly>Like</ScreenReaderOnly>
    </Button>
  );
};

HandleLike.displayName = 'HandleLike';
export default HandleLike;
