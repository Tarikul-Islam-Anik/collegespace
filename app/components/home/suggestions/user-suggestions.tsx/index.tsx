'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import useUsers from '@/hooks/useUsers';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import UserItem from '@/components/shared/user-item';

const UserSuggestions = () => {
  const { users } = useUsers();

  const usersLimit = users?.slice(0, 4);

  return (
    <Card className='w-full border-none bg-muted/50 shadow-none'>
      <CardHeader>
        <CardTitle>People you may know</CardTitle>
      </CardHeader>
      <CardContent className='pb-2'>
        <ul className='flex flex-col'>
          {usersLimit?.map((user, index) => (
            <li key={index} className='my-3'>
              <UserItem user={user} />
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className='pb-4'>
        <Link
          href='/search'
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'mx-auto hover:bg-muted-foreground/5'
          )}
        >
          Find more
        </Link>
      </CardFooter>
    </Card>
  );
};

UserSuggestions.displayName = 'UserSuggestions';
export default UserSuggestions;
