import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
cn;
const Loader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('flex items-center justify-center text-primary', className)}
      {...props}
    >
      <Loader2 className='h-8 w-8 animate-spin text-inherit' />
    </div>
  );
};

Loader.displayName = 'Loader';
export default Loader;
