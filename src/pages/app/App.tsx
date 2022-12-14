import Footer from 'modules/footer/Footer';
import { Header } from 'modules/header';
import { Hero } from 'modules/hero';
import { Projects } from 'modules/projects';
import { useState } from 'react';
import { AppStyled } from './styles';

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState<string>('');
  
  return (
    <AppStyled>
      <Header activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
      <Hero activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
      <main>
        <Projects activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
      </main>
      <Footer setActiveMenuItem={setActiveMenuItem} />
    </AppStyled>
  );
}

export default App;