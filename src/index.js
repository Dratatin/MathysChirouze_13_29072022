import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import SignIn from './page/SignIn';
import User from './page/User';
import Header from './layout/Header';
import Footer from './layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
        <Route path='/user' element={<User />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

