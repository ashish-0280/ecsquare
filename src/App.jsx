import React from 'react';
import Home from './home/Home.jsx';
import Courses from './courses/Courses.jsx'
import {Route, Routes, Navigate} from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Login from './components/Login.jsx';
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
