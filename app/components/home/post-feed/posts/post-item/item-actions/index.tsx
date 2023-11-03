import HandleLike from './handleLike';
import HandleRepost from './handleRepost';
import HandleComment from './handleComment';
import { Flex } from '@/components/layout/flex';
import ToolTipParent from '@/components/shared/tooltip-parent';

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
