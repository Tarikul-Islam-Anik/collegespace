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
import { Box } from '@/components/layout/box';
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
              {users?.map((user, index) => {
                return (
                  <Box key={index}>
                    {index !== 0 && <Separator className='my-2' />}
                    <SearchItem user={user} />
                  </Box>
                );
              })}
            </CommandGroup>
          </ScrollArea>
        )}
      </CommandList>
    </Command>
  );
};

SearchField.displayName = 'SearchField';
export default SearchField;
