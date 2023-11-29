'use client';

import { signIn } from 'next-auth/react';
import { Google } from 'iconsax-react';
import { Button } from '@/components/ui/button';

const SSO = () => {
  return (
    <Button
      variant='outline'
      type='button'
      onClick={() =>
        signIn('google', {
          callbackUrl: '/',
        })
      }
    >
      <Google className='mr-2 h-4 w-4' variant='Bold' />
      Google
    </Button>
  );
};

export default SSO;
