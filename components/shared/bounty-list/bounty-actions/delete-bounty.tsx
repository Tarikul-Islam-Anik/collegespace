import { toast } from 'sonner';
import { Trash } from 'lucide-react';
import useBounty from '@/hooks/useBounty';
import { Button } from '@/components/ui/button';
import AlertDialogParent from '../../alert-dialog-parent';

const DeleteBounty = ({ title }: { title: string }) => {
  const { mutate } = useBounty(true);
  function handleDeleteBounty() {
    toast.promise(
      fetch('/api/bounty/' + title, {
        method: 'DELETE',
      }),
      {
        loading: 'Deleting bounty...',
        success: () => {
          mutate();
          return 'Bounty deleted successfully!';
        },
        error: (err) => {
          return err.message;
        },
      }
    );
  }
  return (
    <AlertDialogParent
      title='Delete Bounty'
      description='Are you sure you want to delete this bounty? This action cannot be undone.'
      action={handleDeleteBounty}
    >
      <Button variant='outline' size='icon'>
        <Trash className='h-4 w-4' aria-label='Delete Bounty' />
      </Button>
    </AlertDialogParent>
  );
};

DeleteBounty.displayName = 'DeleteBounty';
export default DeleteBounty;
