import Search from 'components/Search/Search';
import TheHeader from 'components/TheHeader/TheHeader';
import UserCard from 'components/UserCard/UserCard';
import './App.css';
import Container from './components/Container/Container';

import Loader from 'components/Loader/Loader';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { fetchUser } from 'store/reducers/ActionCreators';

function App() {
  const dispatch = useAppDispatch();
  const { user, isLoading, error } = useAppSelector(state => state.userInfo);
  // const isLoading = false;
  const handleSubmit = (username: string) => {
    dispatch(fetchUser(username));
  };
  console.log(error);
  return (
    <Container>
      <TheHeader />
      <Search
        hasError={!!error}
        onSubmit={handleSubmit}
        isDisabled={isLoading}
      />
      {isLoading && <Loader />}
      {user && !isLoading && <UserCard {...user} />}
    </Container>
  );
}

export default App;
