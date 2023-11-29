'use client';

import { useState } from 'react';
import { Eye, EyeSlash } from 'iconsax-react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Box } from '../layout/box';
import { Input } from '@/components/ui/input';

interface PasswordFieldProps {
  form: any;
  label?: string;
}

const PasswordField = ({ form, label }: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const Icon = showPassword ? EyeSlash : Eye;
  return (
    <FormField
      control={form.control}
      name='password'
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel className='capitalize'>{label}</FormLabel>}
          <FormControl>
            <Box position='relative'>
              <Input
                placeholder={!label ? 'Password' : ''}
                type={showPassword ? 'text' : 'password'}
                {...field}
              />
              <Icon
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2 transform cursor-pointer rounded-sm p-1 text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              />
            </Box>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

PasswordField.displayName = 'PasswordField';
export default PasswordField;
