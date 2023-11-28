import Search from 'components/Search/Search';
import TheHeader from 'components/TheHeader/TheHeader';
import UserCard from 'components/UserCard/UserCard';
import { useState } from 'react';
import './App.css';
import Container from './components/Container/Container';

import { defaultUser } from 'mock';
import { GithubError, GithubUser } from 'types';
import { isGithubUser } from 'utils/typeguards';

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [userData, setUserData] = useState<GithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;
    const res = await fetch(url);
    const data = (await res.json()) as GithubUser | GithubError;

    if (isGithubUser(data)) {
      setUserData(data);
    } else {
      setUserData(null);
    }
  };
  return (
    <Container>
      <TheHeader />
      <Search hasError={!userData} onSubmit={fetchUser} />
      {userData && <UserCard {...userData} />}
    </Container>
  );
}

export default App;
