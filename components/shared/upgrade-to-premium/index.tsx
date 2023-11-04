import { MedalStar } from 'iconsax-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import PremiumFeatures from './premium-features';
import { Button } from '@/components/ui/button';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';

const UpgradeToPremium = () => {
  return (
    <Flex direction='column' gap={2} px={4}>
      <Text color='muted-foreground' size='xs' as='p'>
        Access exclusive tools & insights
      </Text>
      <Dialog>
        <DialogTrigger>
          <Flex align='center' gap={2}>
            <MedalStar className='h-5 w-5 text-muted-foreground' />
            <Text size='xs' className='ml-2 underline underline-offset-4'>
              Upgrade to Premium
            </Text>
          </Flex>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Get the most out of College Space with Premium
            </DialogTitle>
            <DialogDescription>
              College Space Verified is not available for businesses or people
              younger than 18 years of age.
            </DialogDescription>
          </DialogHeader>
          <PremiumFeatures />
          <Button className='mt-4 w-full'>Subscribe for $9.99/month</Button>
          <Text align='center' className='mt-2 text-xs text-muted-foreground'>
            Learn more about Premium and Verified Organizations
          </Text>
        </DialogContent>
      </Dialog>
    </Flex>
  );
};

UpgradeToPremium.displayName = 'UpgradeToPremium';
export default UpgradeToPremium;
