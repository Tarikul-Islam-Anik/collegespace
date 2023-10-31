'use client';

import { useTheme } from 'next-themes';
import { Text } from '@radix-ui/themes';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from '@/components/ui/dropdown-menu';
import {
  Lifebuoy,
  More,
  Setting,
  InfoCircle,
  Sun1,
  Moon,
  LogoutCurve,
} from 'iconsax-react';
import { Button } from '@/components/ui/button';
import ScreenReaderOnly from '@/components/ui/screen-reader-only';

const links = [
  {
    label: 'Settings & Privacy',
    href: '/settings',
    icon: Setting,
  },
  {
    label: 'Help & Support',
    href: '/help',
    icon: Lifebuoy,
  },
  {
    label: 'About',
    href: '/about',
    icon: InfoCircle,
  },
];

const MoreOptions = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='z-50'>
          <More
            aria-label='More options'
            className='h-5 w-5 rotate-90 text-muted-foreground'
          />
          <ScreenReaderOnly>More options</ScreenReaderOnly>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mr-4 2xl:mr-0 '>
        <DropdownMenuItem
          onSelect={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        >
          {theme === 'light' ? (
            <Moon className='mr-2 h-4 w-4' />
          ) : (
            <Sun1 className='mr-2 h-4 w-4' />
          )}
          <Text>Switch Appearance</Text>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              <DropdownMenuItem>
                <link.icon className='mr-2 h-4 w-4' />
                <Text>{link.label}</Text>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => signOut()}>
          <LogoutCurve className='mr-2 h-4 w-4' />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

MoreOptions.displayName = 'MoreOptions';
export default MoreOptions;
