import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import JoinPage from './page/JoinPage';
import Login from './page/LoginPage';
import FindIDPW from './page/FindIDPWPage';
//Pages
import MainPage from './page/MainPage';

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/page/Login' element={<Login/>}/>
        <Route path='/page/JoinPage' element={<JoinPage/>}/>
        <Route path='/page/FindIDPW' element={<FindIDPW/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
