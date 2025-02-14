import React, { useState, useEffect } from 'react';
import Button from './reusable_components/Button';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });
  
    // Effect to apply theme on mount
    useEffect(() => {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [isDarkMode]);
  
    const toggleTheme = () => {
      const newTheme = !isDarkMode;
      setIsDarkMode(newTheme);
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  
      if (newTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
  
    return (
      <div className="flex justify-center">
        <Button onClick={toggleTheme} variant="primary">
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </Button>
      </div>
    );
  };
  
export default ThemeToggle;
