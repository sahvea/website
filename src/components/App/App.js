import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TranslationContext } from '../../contexts/translationContext';
import { translations } from '../../utils/translations';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Projects from '../Projects/Projects';
import Sidebar from '../Sidebar/Sidebar';

function App() {
  const [lang, setLang] = React.useState('en');

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);


  return (
    <TranslationContext.Provider value={translations[lang]}>
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

        <Sidebar onLangClick={setLang} />
      </main>
      <Footer />
    </TranslationContext.Provider>
  );
}

export default App;
