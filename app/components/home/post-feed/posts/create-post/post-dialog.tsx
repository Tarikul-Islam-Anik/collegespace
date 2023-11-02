'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Loader from '@/components/shared/loader';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const PostForm = dynamic(() => import('./post-form'), {
  loading: () => <Loader className='h-48' />,
});

const PostDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant='ghost'
          className='w-full cursor-text justify-start opacity-50 hover:bg-transparent'
        >
          Share your thoughts...
        </Button>
      </DialogTrigger>
      <DialogContent>
        <PostForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default PostDialog;
