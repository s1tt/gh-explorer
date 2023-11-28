import { GithubUser } from 'types';
import styles from './UserTitle.module.scss';

interface UserTitleProps
  extends Pick<GithubUser, 'name' | 'login' | 'created_at'> {}

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
});

const UserTitle = ({ name, login, created_at }: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created_at));
  return (
    <div className={styles.userTitle}>
      <h2>{name || 'NONAME'}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
  );
};

export default UserTitle;
