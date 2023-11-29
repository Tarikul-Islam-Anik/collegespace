import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import ToolTipParent from '../../tooltip-parent';

const SendMessage = () => {
  return (
    <ToolTipParent content='Chat'>
      <Button size='icon' variant='outline'>
        <MessageSquare className='h-4 w-4' aria-label='Send Message' />
      </Button>
    </ToolTipParent>
  );
};

SendMessage.displayName = 'SendMessage';
export default SendMessage;
