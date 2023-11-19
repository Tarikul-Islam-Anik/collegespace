import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import SearchField from './components/search-field';

const SearchPage = () => {
  return (
    <Flex justify='center' align='center' mt={4}>
      <Box />
      <SearchField />
      <Box />
    </Flex>
  );
};

export default SearchPage;
