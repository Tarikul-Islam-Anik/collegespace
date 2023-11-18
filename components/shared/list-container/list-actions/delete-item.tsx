import { toast } from 'sonner';
import { Trash } from 'iconsax-react';
import { Text } from '@/components/typography/text';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import useStudentDetails from '@/hooks/useStudentDetails';

interface DeleteListItemProps {
  type: 'education' | 'project';
  reference: string;
}

const DeleteListItem = ({ type, reference }: DeleteListItemProps) => {
  const { mutate } = useStudentDetails();

  function handleDelete(reference: string) {
    toast.promise(
      fetch(`/api/${type}/${reference}`, {
        method: 'DELETE',
      }),
      {
        loading: `Deleting...`,
        success: () => {
          mutate();
          return `Deleted successfully!`;
        },
        error: "Couldn't delete. Please try again.",
      }
    );
  }
  return (
    <DropdownMenuItem onSelect={() => handleDelete(reference)}>
      <Trash size={16} className='mr-2' />
      <Text>Delete</Text>
    </DropdownMenuItem>
  );
};

DeleteListItem.displayName = 'DeleteListItem';
export default DeleteListItem;
