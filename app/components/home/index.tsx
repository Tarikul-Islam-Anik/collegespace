import PostFeed from './post-feed';
import UserProfile from './user-profile';
import Suggestions from './suggestions';
import { Box } from '@/components/layout/box';
import { Grid } from '@/components/layout/grid';

const Home = () => {
  return (
    <Grid cols={1} className='md:gc container mx-auto xl:grid-cols-4' gap={4}>
      <Box display='hidden' className='xl:block'>
        <UserProfile />
      </Box>
      <Box className='col-span-2 w-[550px] xl:w-full' mx='auto'>
        <PostFeed />
      </Box>
      <Box display='hidden' className='xl:block'>
        <Suggestions />
      </Box>
    </Grid>
  );
};

Home.displayName = 'Home';
export default Home;
