import { Flex } from '@/components/layout/flex';
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
