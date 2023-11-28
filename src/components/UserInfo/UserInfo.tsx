import CompanyIcon from 'assets/icon-company.svg?react';
import LocationIcon from 'assets/icon-location.svg?react';
import TwitterIcon from 'assets/icon-twitter.svg?react';
import WebsiteIcon from 'assets/icon-website.svg?react';
import InfoItem, { InfoItemProps } from 'components/InfoItem/InfoItem';
import { GithubUser } from 'types';
import styles from './UserInfo.module.scss';

interface UserInfo
  extends Pick<
    GithubUser,
    'blog' | 'company' | 'location' | 'twitter_username'
  > {}

const UserInfo = ({ blog, company, location, twitter_username }: UserInfo) => {
  const items: Array<InfoItemProps> = [
    {
      icon: <LocationIcon />,
      text: location
    },
    {
      icon: <WebsiteIcon />,
      text: blog,
      isLink: true
    },
    {
      icon: <TwitterIcon />,
      text: twitter_username
    },
    {
      icon: <CompanyIcon />,
      text: company
    }
  ];
  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
};

export default UserInfo;
