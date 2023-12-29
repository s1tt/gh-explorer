import MoonIcon from 'assets/icon-moon.svg?react';
import SunIcon from 'assets/icon-sun.svg?react';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useEffect } from 'react';
import { changeTheme } from 'store/reducers/ActionCreators';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(state => state.app);
  const themeText = theme === 'dark' ? 'Light' : 'Dark';
  const ThemeIcon = theme === 'dark' ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={styles.switcher} onClick={() => dispatch(changeTheme())}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};

export default ThemeSwitcher;
