import { More, Edit } from 'iconsax-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Text } from '@/components/typography/text';
import DeleteListItem from './delete-item';

interface ListActionsProps {
  type: 'education' | 'project';
  reference: string;
}

const ListActions = ({ type, reference }: ListActionsProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          <More size={24} className='text-muted-foreground' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Edit size={16} className='mr-2' />
          <Text>Edit</Text>
        </DropdownMenuItem>
        <DeleteListItem type={type} reference={reference} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

ListActions.displayName = 'ListActions';
export default ListActions;
