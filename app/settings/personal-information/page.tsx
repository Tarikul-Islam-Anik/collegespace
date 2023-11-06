'use client';
import { Box } from '@/components/layout/box';
import { Text } from '@/components/typography/text';
import { Separator } from '@/components/ui/separator';
import { Heading } from '@/components/typography/heading';
import PersonalInfoForm from './components/personal-info-form';

export default function SettingsPersonalInformationPage() {
  return (
    <Box className='space-y-6'>
      <Box>
        <Heading as='h3' size='lg' weight='medium'>
          Personal Information
        </Heading>
        <Text size='sm' color='muted-foreground'>
          Your personal information is not publicly visible but recuiters can
          see it when you apply for a job.
        </Text>
      </Box>
      <Separator />
      <PersonalInfoForm />
    </Box>
  );
}
