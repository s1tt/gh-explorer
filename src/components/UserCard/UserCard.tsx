import UserInfo from 'components/UserInfo/UserInfo';
import UserStat from 'components/UserStat/UserStat';
import UserTitle from 'components/UserTitle/UserTitle';
import { GithubUser } from 'types';
import styles from './UserCard.module.scss';

interface UserCardProps extends GithubUser {}

const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <img src={props.avatar_url} alt={props.login} className={styles.avatar} />
      <UserTitle
        created_at={props.created_at}
        login={props.login}
        name={props.name}
        email={props.email}
        html_url={props.html_url}
      />
      <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
        {props.bio || 'This profile has no bio'}
      </p>
      <UserStat
        followers={props.followers}
        following={props.following}
        public_repos={props.public_repos}
      />
      <UserInfo
        blog={props.blog}
        company={props.company}
        location={props.location}
        twitter_username={props.twitter_username}
      />
    </div>
  );
};

export default UserCard;
