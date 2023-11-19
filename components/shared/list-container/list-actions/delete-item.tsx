import { toast } from 'sonner';
import useStudentDetails from '@/hooks/useStudentDetails';
import { Button } from '@/components/ui/button';

interface DeleteListItemProps {
  type: 'education' | 'project' | 'experience';
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
    <Button variant='ghost' onClick={() => handleDelete(reference)}>
      Remove
    </Button>
  );
};

DeleteListItem.displayName = 'DeleteListItem';
export default DeleteListItem;
