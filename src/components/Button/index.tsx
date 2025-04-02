import { ComponentProps } from 'react';
import { CircleNotch } from '@phosphor-icons/react';

import { cn } from '../../utils/cn';

interface IButton extends ComponentProps<'button'> {
  isLoading?: boolean
}

export function Button({ children, isLoading, ...props }: IButton) {
  return (
    <button
      {...props}
      disabled={isLoading}
      className={cn(
        'flex items-center justify-center h-12 w-full mt-8 px-6 rounded-md disabled:cursor-not-allowe transition-all',
        'font-medium text-[#F8F9FA] bg-primary hover:bg-secondary',
      )}
    >
      {isLoading
        ? (<CircleNotch size={24} className="animate-spin" data-testid="spinner-icon" />)
        : (children)
      }
    </button>
  );
}
