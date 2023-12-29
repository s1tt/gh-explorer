import GithubIcon from 'assets/icon-github-black.svg?react';
import { GithubUser } from 'types';
import styles from './UserTitle.module.scss';

interface UserTitleProps
  extends Pick<
    GithubUser,
    'name' | 'login' | 'created_at' | 'email' | 'html_url'
  > {}

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
});

const UserTitle = ({
  name,
  login,
  created_at,
  email,
  html_url
}: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created_at));
  return (
    <div className={styles.userTitle}>
      <div className={styles['name-wrapper']}>
        <h2>{name || 'NONAME'}</h2>
        <h3>{login}</h3>
      </div>
      <span className={styles.email}>{email || 'No email'}</span>
      <span className={styles.joinedDate}>{joinedDate}</span>
      <div className={styles.links}>
        <a href={html_url} target='_blank'>
          <GithubIcon />
          Visit on Github
        </a>
      </div>
    </div>
  );
};

export default UserTitle;
