import { Flex } from '@radix-ui/themes';
import BountyItem from './bounty-item';

const BountyList = () => {
  return (
    <Flex direction='column'>
      <BountyItem />
      <BountyItem />
      <BountyItem />
      <BountyItem />
    </Flex>
  );
};

export default BountyList;
