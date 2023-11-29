'use client';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import {
  Briefcase,
  Home2,
  Notification1,
  SearchNormal1,
  User,
  IconProps,
} from 'iconsax-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import NavLink from './navlink';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const NavItems: {
    href: string;
    label: string;
    icon: React.FC<IconProps>;
  }[] = [
    {
      href: '/',
      label: 'Home',
      icon: Home2,
    },
    {
      href: '/search',
      label: 'Search',
      icon: SearchNormal1,
    },
    {
      href: '/notifications',
      label: 'Notifications',
      icon: Notification1,
    },
    {
      href: '/jobs',
      label: 'Jobs',
      icon: Briefcase,
    },
    {
      href: '/profile/' + session?.user?.email,
      label: 'Profile',
      icon: User,
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className='space-x-8'>
          {NavItems.map((item, index) => (
            <NavLink key={index} href={item.href} label={item.label}>
              <item.icon
                aria-label={item.label}
                className={cn(
                  'h-6 w-6',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
                variant={pathname === item.href ? 'Bold' : 'Outline'}
              />
            </NavLink>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
