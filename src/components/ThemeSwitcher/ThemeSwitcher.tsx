import MoonIcon from 'assets/icon-moon.svg?react';
import SunIcon from 'assets/icon-sun.svg?react';
import { useEffect, useState } from 'react';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const themeText = isDarkTheme ? 'Light' : 'Dark';
  const ThemeIcon = isDarkTheme ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);
  return (
    <div
      className={styles.switcher}
      onClick={() => setIsDarkTheme(!isDarkTheme)}
    >
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};

export default ThemeSwitcher;
