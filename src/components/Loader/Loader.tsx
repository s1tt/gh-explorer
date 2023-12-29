import { useAppSelector } from 'hooks/redux';
import styles from './Loader.module.scss';

const Loader = () => {
  const { theme } = useAppSelector(state => state.app);
  return (
    <div className={styles['loader-wrapper']}>
      <div
        className={`${styles.loader} ${
          theme === 'light' && styles['loader-dark']
        }`}
      ></div>
    </div>
  );
};

export default Loader;
