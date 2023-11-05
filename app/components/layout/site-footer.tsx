'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    label: 'Terms',
    href: '/terms',
  },
  {
    label: 'Privacy Policy',
    href: '/privacy-policy',
  },
  {
    label: 'Cookie Policy',
    href: '/cookie-policy',
  },
];

const SiteFooter = ({ show = false }: { show?: boolean }) => {
  const pathname = usePathname();
  if ((!show && pathname === '/') || pathname === '/authentication')
    return null;
  return (
    <footer className={!show ? 'my-4' : ''}>
      <ul className='flex flex-wrap justify-center gap-2 text-xs text-muted-foreground'>
        {links.map((link) => (
          <li key={link.label} className='hover:underline'>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
        <li>
          &copy;
          {new Date().getFullYear()} College Space
        </li>
      </ul>
    </footer>
  );
};

SiteFooter.displayName = 'SiteFooter';
export default SiteFooter;
