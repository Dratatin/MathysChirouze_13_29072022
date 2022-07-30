import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Header from './layout/Header';
import Footer from './layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

