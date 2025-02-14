import React, { useState } from 'react';
import Button from './reusable_components/Button';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark' ||
          (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  return (
    <div className="flex justify-center">
      <Button onClick={toggleTheme} variant="primary">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </div>
  );
};

export default ThemeToggle;
