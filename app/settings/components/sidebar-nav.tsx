'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { useSession } from 'next-auth/react';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();
  const { data: session } = useSession();
  // @ts-ignore
  const role = session?.user?.role;

  const studentNavItems = items.filter((item) => item.title !== 'Company');
  const recruiterNavItems = items.filter(
    (item) => item.title === 'Profile' || item.title === 'Company'
  );

  const NavItem = (item: { href: string; title: string }) => (
    <Link
      key={item.href}
      href={item.href}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        pathname === item.href
          ? 'bg-muted hover:bg-muted'
          : 'hover:bg-transparent hover:underline',
        'justify-start'
      )}
    >
      {item.title}
    </Link>
  );

  return (
    <nav
      className={cn(
        'flex flex-wrap justify-start space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
        className
      )}
      {...props}
    >
      {role === 'student'
        ? studentNavItems.map(NavItem)
        : recruiterNavItems.map(NavItem)}
    </nav>
  );
}
