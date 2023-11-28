import { toast } from 'sonner';
import dynamic from 'next/dynamic';
import { signOut } from 'next-auth/react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const DeleteBtn = (
  <Button variant='destructive' size='sm'>
    Delete account
  </Button>
);

const AlertDialogParent = dynamic(
  () => import('@/components/shared/alert-dialog-parent'),
  { ssr: false, loading: () => DeleteBtn }
);

const DeleteAccount = () => {
  function handleDeleteAccount() {
    toast.promise(fetch('/api/users', { method: 'DELETE' }), {
      loading: 'Deleting account...',
      success: 'Account deleted successfully.',
      error: 'Something went wrong. Please try again.',
    });
    signOut();
  }
  return (
    <Alert variant='destructive' className='relative'>
      <Flex align='center' gap={4} justify='between'>
        <Flex gap={2}>
          <Box>
            <AlertTriangle className='h-4 w-4' />
          </Box>
          <Box>
            <AlertTitle>Delete your account</AlertTitle>
            <AlertDescription>
              Permanently delete your account and all of your content.
            </AlertDescription>
          </Box>
        </Flex>
        <AlertDialogParent
          title='Delete your account'
          description='Are you sure you want to delete your account? This action cannot be undone.'
          action={handleDeleteAccount}
        >
          {DeleteBtn}
        </AlertDialogParent>
      </Flex>
    </Alert>
  );
};

DeleteAccount.displayName = 'DeleteAccount';
export default DeleteAccount;
