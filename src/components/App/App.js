import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from '../Contact/Contact';
import Main from '../Main/Main';
import Projects from '../Projects/Projects';
import Sidebar from '../Sidebar/Sidebar';

function App() {
  return (
    <>
      <Routes>
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
    </>
  );
}

export default App;
