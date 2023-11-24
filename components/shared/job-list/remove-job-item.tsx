import { toast } from 'sonner';
import useJobs from '@/hooks/useJobs';
import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';

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
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Delete Job</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete this job? This action cannot be
          undone. All applicants data will be removed.
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <DialogClose asChild>
          <Button variant='ghost'>Cancel</Button>
        </DialogClose>
        <Button onClick={handleDelete} variant='destructive'>Delete</Button>
      </DialogFooter>
    </DialogContent>
  );
};

RemoveJobItem.displayName = 'RemoveJobItem';
export default RemoveJobItem;
