import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

const HandlePostCopy = ({ postId }: { postId: string }) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/post/${postId}`);
  };
  return (
    <DropdownMenuItem onSelect={handleCopyLink}>Copy link</DropdownMenuItem>
  );
};

HandlePostCopy.displayName = 'HandlePostCopy';
export default HandlePostCopy;
