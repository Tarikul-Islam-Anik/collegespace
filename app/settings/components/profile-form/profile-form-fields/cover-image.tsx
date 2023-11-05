'use client';
import Image from 'next/legacy/image';
import { UseFormReturn } from 'react-hook-form';
import { GalleryAdd } from 'iconsax-react';
import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ProfileFormValues } from '../schema';
import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const CoverImage = ({ form }: { form: UseFormReturn<ProfileFormValues> }) => {
  return (
    <FormField
      control={form.control}
      name='coverImage'
      render={({ field: { value, onChange, ...field } }) => (
        <FormItem className='col-span-full'>
          <FormLabel>Cover photo</FormLabel>
          <FormControl>
            <Flex
              justify='center'
              className={cn(
                form.getValues('coverImage') === '' &&
                  'border-muted-2 border-2 border-dashed',
                'relative h-60 overflow-hidden rounded-xl'
              )}
            >
              {form.getValues('coverImage') === '' ? (
                <Box className='text-center'>
                  <GalleryAdd
                    className='mx-auto h-12 w-12 text-muted-foreground'
                    variant='Outline'
                    aria-hidden='true'
                  />
                  <Flex
                    mt={4}
                    align='center'
                    justify='center'
                    gap={4}
                    className='text-sm leading-6 text-muted-foreground'
                  >
                    <Button variant='outline' asChild>
                      <Label htmlFor='coverImage'>
                        <Input
                          id='coverImage'
                          type='file'
                          className='sr-only'
                          // @ts-ignore
                          value={value?.fileName}
                          onChange={(event) => {
                            const file = event.target.files?.[0];
                            if (file) {
                              onChange(file);
                            }
                          }}
                          {...field}
                        />
                        Select a cover photo
                      </Label>
                    </Button>
                  </Flex>
                  <Text as='p' size='xs' className='mt-2 text-muted-foreground'>
                    PNG, JPG, GIF up to 5MB. Recommended size: 1500x500 pixels
                  </Text>
                </Box>
              ) : (
                <Box className='h-[500px] w-[1500px]'>
                  <Image
                    src={
                      (typeof value === 'object'
                        ? URL.createObjectURL(value)
                        : value) ?? ''
                    }
                    alt='Cover photo'
                    width={1500}
                    height={500}
                    layout='responsive'
                    className='w-full rounded-xl'
                  />
                </Box>
              )}
            </Flex>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CoverImage;
