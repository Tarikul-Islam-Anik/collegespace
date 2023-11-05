import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';

const loaderVariants = cva('animate-spin text-inherit', {
  variants: {
    size: {
      default: 'h-8 w-8',
      sm: 'h-6 w-6',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'sm';
}

const Loader = ({ className, size, ...props }: LoaderProps) => {
  return (
    <div
      className={cn('flex items-center justify-center text-primary', className)}
      {...props}
    >
      <Loader2 className={loaderVariants({ size })} />
    </div>
  );
};

Loader.displayName = 'Loader';
export default Loader;
