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
import { Separator } from '@/components/ui/separator';
import Loader from '@/components/shared/loader';

const SearchField = () => {
  const { users, isLoading } = useUsers();

  return (
    <Command className='w-[500px]'>
      <CommandInput placeholder='Search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {isLoading ? (
          <Loader />
        ) : (
          <CommandGroup className='mt-4'>
            {users?.map((user, index) => {
              return (
                <>
                  {index !== 0 && <Separator className='my-4' />}
                  <SearchItem user={user} />
                </>
              );
            })}
          </CommandGroup>
        )}
      </CommandList>
    </Command>
  );
};

SearchField.displayName = 'SearchField';
export default SearchField;
