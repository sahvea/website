import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TranslationContext } from '../../contexts/translationContext';
import { translations } from '../../utils/translations';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Projects from '../Projects/Projects';
import Sidebar from '../Sidebar/Sidebar';

function App() {
  const [lang, setLang] = React.useState('en');
  const [mobResolution, setMobResolution] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  function checkWindowWidth() {
    setTimeout(() => setWindowWidth(window.innerWidth), 500);
  };


  React.useEffect(() => {
    window.addEventListener('resize', checkWindowWidth);

    windowWidth < 1024
      ? setMobResolution(true)
      : setMobResolution(false);

    return () => window.removeEventListener('resize', checkWindowWidth);
  }, [windowWidth]);

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);


  return (
    <TranslationContext.Provider value={translations[lang]}>

      { mobResolution && <Header onLangClick={setLang} /> }

      <main>
        <Routes>
          <Route path="/"
            element={ <Main /> }
          />

          <Route path="/projects"
            element={ <Projects /> }
          />

          <Route path="/contact"
            element={ <Contact /> }
          />

          <Route path="*"
            element={ <NotFound /> }
          />
        </Routes>

        { !mobResolution && <Sidebar onLangClick={setLang} /> }
      </main>
      <Footer />
    </TranslationContext.Provider>
  );
}

export default App;
