import NextLink from 'next/link';
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import ScreenReaderOnly from '@/components/ui/screen-reader-only';
import { cn } from '@/lib/utils';

const NavLink = ({
  href,
  label,
  children,
  ...props
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <NextLink
      href={href}
      passHref
      legacyBehavior
      aria-label={(label as string) + ' page'}
    >
      <NavigationMenuLink
        className={cn(navigationMenuTriggerStyle(), 'h-12 w-12')}
        aria-label={(label as string) + ' page'}
        {...props}
      >
        <Text>
          {children}
          <ScreenReaderOnly content={label + ' page'} />
        </Text>
      </NavigationMenuLink>
    </NextLink>
  );
};

NavLink.displayName = 'NavLink';

export default NavLink;
