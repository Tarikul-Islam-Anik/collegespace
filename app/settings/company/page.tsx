import CompanyForm from './company-form';
import { Box } from '@/components/layout/box';
import SectionHeading from '../components/section-heading';

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
