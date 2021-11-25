import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Contact from '../Contact/Contact';
import Main from '../Main/Main';
import Projects from '../Projects/Projects';
import Sidebar from '../Sidebar/Sidebar';

function App() {
  const location = useLocation();

  React.useEffect(() => {
    console.log(process.env.PUBLIC_URL);
    console.log(window.location.href);
    console.log(location);
  }, [location]);

  return (
    <>
      <main>
        <Routes basename={process.env.PUBLIC_URL + '/'} >
          <Route path="/"
            element={
              <Main />
            }
          />

          <Route path="/projects"
            element={
              <Projects />
            }
          />

          <Route path="/contact"
            element={
              <Contact />
            }
          />
        </Routes>

        <Sidebar />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
