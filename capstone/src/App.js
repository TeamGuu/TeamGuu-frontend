import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

//Pages
import MainPage from './page/MainPage';

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
