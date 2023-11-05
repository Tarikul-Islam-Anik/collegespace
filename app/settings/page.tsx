import { Box } from '@/components/layout/box';
import { Text } from '@/components/typography/text';
import ProfileForm from './components/profile-form';
import { Separator } from '@/components/ui/separator';
import { Heading } from '@/components/typography/heading';

export default function SettingsProfilePage() {

  return (
    <Box className='space-y-6'>
      <Box>
        <Heading className='text-lg font-medium'>Profile</Heading>
        <Text className='text-sm text-muted-foreground'>
          This information will be displayed publicly so be careful what you
          share.
        </Text>
      </Box>
      <Separator />
      <ProfileForm />
    </Box>
  );
}
