'use client';
import dynamic from 'next/dynamic';
import useUser from '@/hooks/useUser';
import { Box } from '@/components/layout/box';
import Loader from '@/components/shared/loader';
import SectionHeading from '../../../components/shared/section-heading';

const CompanyForm = dynamic(() => import('./company-form'), {
  loading: () => <Loader />,
});

export default function SettingsCompanyPage() {
  const { user, isLoading } = useUser();

  return (
    <Box className='space-y-6'>
      <SectionHeading
        title='Company'
        description='Update your company information.'
      />
      {isLoading ? <Loader /> : user && <CompanyForm user={user} />}
    </Box>
  );
}
