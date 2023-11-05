import { Flex } from '@/components/layout/flex';
import MediaObject from '../media-objects';
import { SecurityUser, Shield, FavoriteChart, TicketStar } from 'iconsax-react';

const PremiumFeatures = () => {
  return (
    <Flex direction='column' className='space-y-5'>
      <MediaObject
        heading='A verified badge'
        content="Your audience can trust that you're a real person."
      >
        <SecurityUser className='h-7 w-7 text-muted-foreground' />
      </MediaObject>
      <MediaObject
        heading='Increased account protection'
        content='Worry less about impersonation with proactive identity monitoring.'
      >
        <Shield className='h-7 w-7 text-muted-foreground' />
      </MediaObject>
      <MediaObject
        heading='Student insights'
        content='Get the in depth insights you need to hire the right candidates.'
      >
        <FavoriteChart className='h-7 w-7 text-muted-foreground' />
      </MediaObject>
      <MediaObject
        heading='Recruitement Tickets'
        content='Get monthly 3 tickets to post jobs and bounties.'
      >
        <TicketStar className='h-7 w-7 text-muted-foreground' />
      </MediaObject>
    </Flex>
  );
};

PremiumFeatures.displayName = 'PremiumFeatures';
export default PremiumFeatures;
