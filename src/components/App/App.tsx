import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { TranslationContext } from '../../contexts/translationContext';
import { translations } from '../../utils/translations';
import Contact from '../Contact/Contact';
import Flying from '../Deco/Flying/Flying';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Projects from '../Projects/Projects';
import Sidebar from '../Sidebar/Sidebar';

const App: React.FC = () => {
  const [lang, setLang] = useState<string>('en');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mobResolution, setMobResolution] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  function checkWindowWidth() {
    setTimeout(() => setWindowWidth(window.innerWidth), 500);
  };


  useEffect(() => {
    window.addEventListener('resize', checkWindowWidth);

    windowWidth <= 1023
      ? setMobResolution(true)
      : setMobResolution(false);

    return () => window.removeEventListener('resize', checkWindowWidth);
  }, [windowWidth]);


  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    document.onreadystatechange = function() {
      if (document.readyState === 'loading') {
        setIsLoading(true);
      } else if (document.readyState === 'interactive') {
        setIsLoading(true);
      } else if (document.readyState === 'complete') {
        setIsLoading(false);
      }
   }
  }, [isLoading]);

  return (
    <TranslationContext.Provider value={translations[lang]}>

      {isLoading
        ?
        <div className='app__loading'>
          <Flying />
        </div>
        :
        <>
          { mobResolution && <Header onLangClick={setLang} /> }

          <main>
            <Routes>
              <Route path="/" element={ <Main /> } />

              <Route path="/projects" element={ <Projects /> } />

              <Route path="/contact" element={ <Contact /> } />

              <Route path="*" element={ <NotFound /> } />
            </Routes>

            { !mobResolution && <Sidebar onLangClick={setLang} /> }
          </main>
          <Footer />
        </>
      }
    </TranslationContext.Provider>
  );
}
export default App;
