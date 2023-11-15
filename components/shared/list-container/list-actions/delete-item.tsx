import { toast } from 'sonner';
import { Trash } from 'iconsax-react';
import useCurrentUser from '@/hooks/useCurrentUser';
import { Text } from '@/components/typography/text';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

interface DeleteListItemProps {
  type: 'education' | 'project';
  reference: string;
}

const DeleteListItem = ({ type, reference }: DeleteListItemProps) => {
  const { setCurrentUser } = useCurrentUser();

  function removeProjectFromUser(reference: string) {
    return setCurrentUser((prev) => ({
      ...prev!,
      Project: prev?.projects.filter((project) => project.title !== reference)!,
    }));
  }

  function removeEducationFromUser(reference: string) {
    return setCurrentUser((prev) => ({
      ...prev!,
      StudentDetails: {
        ...prev?.studentDetails!,
        education: prev?.studentDetails?.educations.filter(
          (education) => education.id !== reference
        )!,
      },
    }));
  }

  function handleDelete(reference: string) {
    toast.promise(
      fetch(`/api/${type}/${reference}`, {
        method: 'DELETE',
      }),
      {
        loading: `Deleting...`,
        success: () => {
          type === 'education'
            ? removeEducationFromUser(reference)
            : removeProjectFromUser(reference);
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
