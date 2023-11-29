import React, { forwardRef } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const ToolTipParent = forwardRef(
  (
    props: {
      children: React.ReactNode;
      content: string;
    },
    ref
  ) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            ref={ref as React.RefObject<HTMLButtonElement>}
            asChild
          >
            {props.children}
          </TooltipTrigger>
          <TooltipContent>{props.content}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
);

ToolTipParent.displayName = 'ToolTipParent';
export default ToolTipParent;
