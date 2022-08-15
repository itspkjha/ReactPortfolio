import Home from './pages/Home';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import About from './pages/About';
import Skills from './pages/Skills';

const App = () => {
    return(
        <Routes>
            <Route element={<Home/>} index path='/'/>     
            <Route element={<About/>} index path='/about'/>
            <Route element={<Skills/>} index path='/skills'/>
        </Routes>
    )
}
export default App;