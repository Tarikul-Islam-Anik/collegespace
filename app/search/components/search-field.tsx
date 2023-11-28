'use client';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from '@/components/ui/command';
import useUsers from '@/hooks/useUsers';
import SearchItem from './search-items';
import Loader from '@/components/shared/loader';
import { ScrollArea } from '@/components/ui/scroll-area';

const SearchField = () => {
  const { users, isLoading } = useUsers();

  return (
    <Command className='page-width'>
      <CommandInput placeholder='Search...' />
      <CommandList className='max-h-full'>
        <CommandEmpty>No results found.</CommandEmpty>
        {isLoading ? (
          <Loader className='mt-4' />
        ) : (
          <ScrollArea className='h-[65vh]'>
            <CommandGroup className='mt-4'>
              {users?.map((user) => <SearchItem user={user} key={user.id} />)}
            </CommandGroup>
          </ScrollArea>
        )}
      </CommandList>
    </Command>
  );
};

SearchField.displayName = 'SearchField';
export default SearchField;
