'use client';

import useUser from '@/hooks/useUser';
import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import { Container } from '@/components/layout/container';
import ProfileData from '../components/profile-data';
import ProfileActivities from '../components/profile-activites';
import Loader from '@/components/shared/loader';

const ProfilePage = ({ params }: { params: { email: string } }) => {
  const { email } = params;
  const { user, isLoading } = useUser(email);

  return isLoading ? (
    <Loader className='h-[80vh]' />
  ) : (
    user && (
      <Box mx='auto' className='page-width'>
        <Container>
          <Flex direction='column' align='start' gap={4}>
            <ProfileData user={user} isLoading={isLoading} />
            <ProfileActivities email={email} />
          </Flex>
        </Container>
      </Box>
    )
  );
};

export default ProfilePage;
