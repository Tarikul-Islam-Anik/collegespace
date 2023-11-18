import dynamic from 'next/dynamic';
import { Box } from '@/components/layout/box';
import Loader from '@/components/shared/loader';
import SectionHeading from '../components/section-heading';

const CompanyForm = dynamic(() => import('./company-form'), {
  loading: () => <Loader />,
});

export default function SettingsCompanyPage() {
  return (
    <Box className='space-y-6'>
      <SectionHeading
        title='Company'
        description='Update your company information.'
      />
      <CompanyForm />
    </Box>
  );
}
