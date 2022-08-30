import Home from './pages/Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Skills from './pages/Skills';

function App() {
  return (
    <Routes>
      <Route element={<Home />} index path='/' />
      <Route element={<About />} path='/about' />
      <Route element={<Skills />} path='/skills' />
    </Routes>
  );
}
export default App;
