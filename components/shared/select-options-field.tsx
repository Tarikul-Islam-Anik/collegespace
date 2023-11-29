'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SelectOptionsFieldProps {
  name: string;
  label: string;
  triggerPlaceholder: string;
  options: Record<string, string>;
  form: any;
}

const SelectOptionsField = ({
  name,
  label,
  triggerPlaceholder,
  options,
  form,
}: SelectOptionsFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={triggerPlaceholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {Object.entries(options).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

SelectOptionsField.displayName = 'SelectOptionsField';
export default SelectOptionsField;
