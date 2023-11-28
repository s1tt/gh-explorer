import { GithubUser } from 'types';
import styles from './UserStat.module.scss';

export interface UserStatProps
  extends Pick<GithubUser, 'public_repos' | 'followers' | 'following'> {}

const UserStat = ({ public_repos, followers, following }: UserStatProps) => {
  return (
    <div className={styles.userStat}>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Repos</div>
        <div className={styles.infoNumber}>{public_repos}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Following</div>
        <div className={styles.infoNumber}>{following}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>followers</div>
        <div className={styles.infoNumber}>{followers}</div>
      </div>
    </div>
  );
};

export default UserStat;
