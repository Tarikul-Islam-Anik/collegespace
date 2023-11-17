import { Flex } from '@/components/layout/flex';
import UserSuggestions from './user-suggestions';
import SiteFooter from '@/app/components/layout/site-footer';

const Suggestions = () => {
  return (
    <Flex direction='column' align='center' gap={4} width='full'>
      <UserSuggestions />
      <SiteFooter show />
    </Flex>
  );
};

Suggestions.displayName = 'Suggestions';
export default Suggestions;
