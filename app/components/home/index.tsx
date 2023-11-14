import PostFeed from './post-feed';
import { Box } from '@/components/layout/box';
import { Grid } from '@/components/layout/grid';
import UserProfile from './user-profile';
import Suggestions from './suggestions';

const Home = () => {
  return (
    <Grid cols={4} className='container mx-auto' mt={8} gap={4}>
      <UserProfile />
      <Box className='col-span-2'>
        <PostFeed />
      </Box>
      <Suggestions />
    </Grid>
  );
};

Home.displayName = 'Home';
export default Home;
