'use client';

import { useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserAvatar = ({ className }: { className?: string }) => {
  const { data: session } = useSession();
  return (
    <Avatar className={className}>
      <AvatarImage
        src={session?.user?.image ?? ''}
        alt={session?.user?.name ?? ''}
      />
      <AvatarFallback>
        {session?.user?.name
          ?.split(' ')
          .map((name: string) => name[0])
          .join('')
          .slice(0, 2)}
      </AvatarFallback>
    </Avatar>
  );
};

UserAvatar.displayName = 'UserAvatar';
export default UserAvatar;
