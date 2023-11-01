import { Grid, Box } from '@radix-ui/themes';
import MiddleColumn from './middle-column';

const Home = () => {
  return (
    <Grid columns='1' className='container mt-4' gap='4'>
      <Box className='col-span-2'>
        <MiddleColumn />
      </Box>
    </Grid>
  );
};

Home.displayName = 'Home';
export default Home;
