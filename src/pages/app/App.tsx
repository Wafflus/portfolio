import Footer from 'modules/footer/Footer';
import { Header } from 'modules/header';
import { Hero } from 'modules/hero';
import { Projects } from 'modules/projects';
import { AppStyled } from './styles';

function App() {
  return (
    <AppStyled>
      <Header />
      <Hero />
      <main>
        <Projects />
      </main>
      <Footer />
    </AppStyled>
  );
}

export default App;