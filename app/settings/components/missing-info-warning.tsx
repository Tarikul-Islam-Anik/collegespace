import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';
import EmptyState from '@/components/shared/empty-state';
import { buttonVariants } from '@/components/ui/button';

const MissingInfoWaring = () => {
  return (
    <EmptyState
      title='Personal Information is incomplete'
      description='Please complete your personal informations to continue.'
      icon={<AlertTriangle className='h-12 w-12' />}
    >
      <Link
        href='/settings/personal-information'
        className={buttonVariants({ variant: 'default' })}
      >
        Personal Information
      </Link>
    </EmptyState>
  );
};

MissingInfoWaring.displayName = 'MissingInfoWaring';
export default MissingInfoWaring;
