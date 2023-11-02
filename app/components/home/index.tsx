import { Grid, Box } from '@radix-ui/themes';
import PostFeed from './post-feed';

const Home = () => {
  return (
    <Grid columns='1' className='container mt-4' gap='4'>
      <Box className='col-span-2'>
        <PostFeed />
      </Box>
    </Grid>
  );
};

Home.displayName = 'Home';
export default Home;
