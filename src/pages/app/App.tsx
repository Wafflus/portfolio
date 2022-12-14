import { Header } from 'modules/header';
import { Hero } from 'modules/hero';
import { AppStyled } from './styles';

function App() {
  return (
    <AppStyled>
      <Header />
      <Hero />
    </AppStyled>
  );
}

export default App;