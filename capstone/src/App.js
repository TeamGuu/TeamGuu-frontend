import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Navigation from './components/navbar/Navigation';

//Pages
import MainPage from './page/MainPage';
import JoinPage from './page/JoinPage';
import LoginPage from './page/LoginPage';
import FindIDPWPage from './page/FindIDPWPage';

const App = (props) => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/page/LoginPage' element={<LoginPage/>}/>
        <Route path='/page/JoinPage' element={<JoinPage/>}/>
        <Route path='/page/FindIDPWPage' element={<FindIDPWPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
