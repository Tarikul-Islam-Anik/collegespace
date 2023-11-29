import * as React from 'react';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

const ScreenReaderOnly = React.forwardRef<
  HTMLSpanElement,
  React.ComponentProps<typeof VisuallyHidden.Root>
>((props, ref) => {
  return <VisuallyHidden.Root {...props} ref={ref} />;
});

ScreenReaderOnly.displayName = 'ScreenReaderOnly';
export default ScreenReaderOnly;
