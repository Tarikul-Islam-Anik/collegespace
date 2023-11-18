import UserItem from '@/components/shared/user-item';
import { CommandItem } from '@/components/ui/command';
import { UserType } from '@/lib/type';

const SearchItem = ({ user }: { user: Partial<UserType> }) => {
  return (
    <CommandItem className='w-full'>
      <UserItem user={user} followButton/>
    </CommandItem>
  );
};

SearchItem.displayName = 'SearchItem';
export default SearchItem;
