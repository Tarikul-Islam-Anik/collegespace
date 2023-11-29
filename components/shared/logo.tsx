import { cn } from '@/lib/utils';
import { Profile2User } from 'iconsax-react';
import { Flex } from '../layout/flex';
import { Text } from '../typography/text';
const Logo = ({ className }: { className?: string }) => {
  return (
    <Flex align='center' className={cn('text-lg font-medium', className)}>
      <Profile2User variant="TwoTone" className='mr-2 h-6 w-6' />
      <Text>College Space</Text>
    </Flex>
  );
};

export default Logo;
