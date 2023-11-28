import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import styles from './TheHeader.module.scss';

const TheHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>DevFinder</div>
      <ThemeSwitcher />
    </header>
  );
};

export default TheHeader;
