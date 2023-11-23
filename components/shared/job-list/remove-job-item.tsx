import { toast } from 'sonner';
import useJobs from '@/hooks/useJobs';
import { Button } from '@/components/ui/button';
import AlertDialogParent from '../alert-dialog-parent';

const RemoveJobItem = ({
  jobId,
  companyId,
}: {
  jobId: string;
  companyId: string;
}) => {
  const { mutate } = useJobs(companyId);
  function handleDelete() {
    toast.promise(
      fetch(`/api/company/jobs/${jobId}`, {
        method: 'DELETE',
      }),
      {
        loading: 'Deleting...',
        success: () => {
          mutate();
          return 'Job deleted';
        },
        error: 'Error deleting job',
      }
    );
  }
  return (
    <AlertDialogParent
      title='Delete Job post'
      description='Are you sure you want to delete this job? This action cannot be undone. All applicants data will be removed.'
      action={handleDelete}
    >
      <Button size='sm' variant='outline'>
        Remove
      </Button>
    </AlertDialogParent>
  );
};

RemoveJobItem.displayName = 'RemoveJobItem';
export default RemoveJobItem;
