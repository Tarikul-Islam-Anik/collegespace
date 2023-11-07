import { Add } from 'iconsax-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/typography/text';

interface FormDialog {
  title: string;
  description: string;
  label: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
}

const FormDialog = ({
  title,
  description,
  label,
  open,
  setOpen,
  children,
}: FormDialog) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Add className='mr-1 h-5 w-5' />
          <Text>{label}</Text>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

FormDialog.displayName = 'FormDialog';
export default FormDialog;
