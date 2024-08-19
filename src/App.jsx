import React from 'react';
import Home from './home/Home.jsx';
import Courses from './courses/Courses.jsx'
import {Route, Routes} from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<Signup/>}/>

      </Routes>
    </>
  );
}

export default App;
