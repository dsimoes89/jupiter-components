import React, { useState } from 'react';
import { useGlobals } from '@storybook/addons';
import { Moon, Sun } from '@phosphor-icons/react';

import { cn } from '../src/utils/cn';

export const ThemeSwitch = (Story: any) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [_, updateGlobals] = useGlobals();

  const handleTheme = () => {
    const changedTheme = !darkTheme;

    document.documentElement.classList.toggle("dark", changedTheme);
    setDarkTheme(changedTheme);
    updateGlobals({
      backgrounds: {
        value: changedTheme ? '#1C1C1E' : '#F8F9FA',
      },
      theme: changedTheme ? 'dark' : 'light',
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={handleTheme}
        className={cn(
          'flex items-center justify-center h-8 w-8 p-1 rounded-full z-50 outline-none',
          darkTheme && 'bg-white/10',
          !darkTheme && 'bg-black/10',
        )}
      >
        <div className="relative w-6 h-6">
          <Sun
            weight="fill"
            className={cn(
              'absolute h-full w-full text-[#F8F9FA] transition-all duration-300',
              darkTheme ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
            )}
          />
          <Moon
            weight="fill"
            className={cn(
              'absolute h-full w-full text-[#1C1C1E] transition-all duration-300',
              !darkTheme ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
            )}
          />
        </div>
      </button>

      <Story />
    </div>
  );
};
