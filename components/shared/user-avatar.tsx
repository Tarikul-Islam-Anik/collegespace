'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserAvatar = ({
  name,
  image,
  className,
}: {
  name: string | null | undefined;
  image: string | null | undefined;
  className?: string;
}) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={image ?? ''} alt={name ?? ''} />
      <AvatarFallback className={className}>
        {name
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
