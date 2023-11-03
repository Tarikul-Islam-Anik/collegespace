import PostFeed from './post-feed';
import { Box } from '@/components/layout/box';
import { Grid } from '@/components/layout/grid';

const Home = () => {
  return (
    <Grid cols={1} className='container' mt={8} mx='auto' gap={4}>
      <Box>
        <PostFeed />
      </Box>
    </Grid>
  );
};

Home.displayName = 'Home';
export default Home;
