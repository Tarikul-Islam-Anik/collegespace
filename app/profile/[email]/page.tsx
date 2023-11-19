import { Flex } from '@/components/layout/flex';
import { Container } from '@/components/layout/container';
import ProfileData from '../components/profile-data';
import ProfileActivities from '../components/profile-activites';
import { Box } from '@/components/layout/box';

const ProfilePage = ({ params }: { params: { email: string } }) => {
  const { email } = params;
  return (
    <Box mx='auto' className='w-[550px]'>
      <Container>
        <Flex direction='column' align='start' gap={4}>
          <ProfileData email={email} />
          <ProfileActivities email={email} />
        </Flex>
      </Container>
    </Box>
  );
};

export default ProfilePage;
