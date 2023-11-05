'use client';
import { UseFormReturn } from 'react-hook-form';
import { GalleryAdd } from 'iconsax-react';
import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormDescription,
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
              className='mt-2 rounded-lg border border-dashed border-muted-foreground/50 px-6 py-9'
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
                <img
                  src={
                    typeof value === 'object'
                      ? URL.createObjectURL(value)
                      : value
                  }
                  alt='Cover photo'
                  className='w-full rounded-lg'
                />
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
