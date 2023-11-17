import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Flex } from '@/components/layout/flex';
import { buttonVariants } from '@/components/ui/button';

const CompletedProfileButton = () => {
  return (
    <Flex width='full' justify='center' mt={2}>
      <Link
        href={'/settings'}
        className={cn(buttonVariants({ variant: 'outline' }), 'text-xs')}
      >
        Complete your profile
      </Link>
    </Flex>
  );
};

CompletedProfileButton.displayName = 'CompletedProfileButton';
export default CompletedProfileButton;
