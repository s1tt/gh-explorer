import Search from 'components/Search/Search';
import TheHeader from 'components/TheHeader/TheHeader';
import './App.css';
import Container from './components/Container/Container';

function App() {
  return (
    <Container>
      <TheHeader />
      <Search hasError onSubmit={() => {}} />
    </Container>
  );
}

export default App;
