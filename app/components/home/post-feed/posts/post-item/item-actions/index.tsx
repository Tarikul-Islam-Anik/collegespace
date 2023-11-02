import { Flex } from '@radix-ui/themes';
import ToolTipParent from '@/components/shared/tooltip-parent';
import HandleLike from './handleLike';
import HandleRepost from './handleRepost';
import HandleComment from './handleComment';

const actions = [
  {
    label: 'Like',
    handle: HandleLike,
  },
  {
    label: 'Repost',
    handle: HandleRepost,
  },
  {
    label: 'Comment',
    handle: HandleComment,
  },
];

const PostActions = ({ postId }: { postId: string }) => {
  return (
    <Flex>
      {actions.map(({ handle, label }) => (
        <ToolTipParent content={label} key={label}>
          {handle({ postId })}
        </ToolTipParent>
      ))}
    </Flex>
  );
};

export default PostActions;
