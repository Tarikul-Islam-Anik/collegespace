import { AtSign } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import ToolTipParent from '../../tooltip-parent';

const SendEmail = ({ email }: { email: string | undefined }) => {
  return (
    <ToolTipParent content='Email'>
      <a
        href={`mailto:${email}`}
        className={buttonVariants({ variant: 'outline', size: 'icon' })}
      >
        <AtSign className='h-4 w-4' aria-label='Send Email' />
      </a>
    </ToolTipParent>
  );
};

SendEmail.displayName = 'SendEmail';
export default SendEmail;
