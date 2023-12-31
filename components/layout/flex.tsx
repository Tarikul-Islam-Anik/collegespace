import React from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import {
  boxVariants,
  flexVariants,
  BoxVariants,
  FlexVariants,
} from './variants';
import { cx } from 'class-variance-authority';

type FlexElement = React.ElementRef<'div'>;

interface FlexProps
  extends React.ComponentPropsWithoutRef<'div'>,
    BoxVariants,
    FlexVariants {
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Flex = React.forwardRef<FlexElement, FlexProps>((props, forwardedRef) => {
  const {
    asChild,
    className,
    display,
    direction,
    align,
    justify,
    wrap,
    gap,
    position,
    width,
    height,
    m,
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    p,
    pt,
    pr,
    pb,
    pl,
    px,
    py,
    ...flexProps
  } = props;

  const flexClassName = cn(
    cx(
      boxVariants({
        display: 'flex',
        gap,
        position,
        width,
        height,
        m,
        mt,
        mr,
        mb,
        ml,
        mx,
        my,
        p,
        pt,
        pr,
        pb,
        pl,
        px,
        py,
      }),
      flexVariants({
        direction,
        align,
        justify,
        wrap,
      })
    )
  );
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      ref={forwardedRef}
      className={cn(flexClassName, className)}
      {...flexProps}
    />
  );
});

Flex.displayName = 'Flex';
export { Flex };
export type { FlexProps };
