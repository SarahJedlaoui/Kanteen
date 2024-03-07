"use client";

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export function Providers({ children }) {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Check if a theme is saved in local storage but you want to enforce light mode as default
    if (localStorage.getItem('theme') && theme !== 'light') {
      setTheme('light'); // Set the theme to light regardless of the saved preference
    }
  }, [theme, setTheme]);

  return <>{children}</>;
}
