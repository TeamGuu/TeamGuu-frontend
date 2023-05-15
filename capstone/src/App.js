import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import './App.css';

//components
import Navigation from './components/navbar/Navigation';

//Pages
import MainPage from './page/MainPage';
import JoinPage from './page/JoinPage';
import LoginPage from './page/LoginPage';
import FindIDPage from './page/FindIDPage';
import FindPWPage from './page/FindPWPage';
import CreateMatchPage from './page/CreateMatchPage';
import MatchListPage from './page/MatchListPage';
import MatchInfoPage from './page/MatchInfoPage';
import StadiumListPage from './page/StadiumListPage';
import StadiumInfoPage from './page/StadiumInfoPage';
import MyInfoPage from './page/MyInfoPage';
import TeamInfoPage from './page/TeamInfoPage';
import CreateTeamPage from './page/CreateTeamPage';
import TeamInfoFixPage from './page/TeamInfoFixPage';
import TeamListPage from './page/TeamListPage';
const App = (props) => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<MainPage/>} />
        <Route exact path='/page/LoginPage' element={<LoginPage/>}/>
        <Route path='/page/JoinPage' element={<JoinPage/>}/>
        <Route path='/page/FindIDPage' element={<FindIDPage/>}/>
        <Route path='/page/FindPWPage' element={<FindPWPage/>}/>
        <Route path='/page/CreateMatchPage' element={<CreateMatchPage/>}/>
        <Route path='/page/MatchListPage' element={<MatchListPage/>}/>
        <Route path='/page/MatchInfoPage' element={<MatchInfoPage/>}/>
        <Route path='/page/StadiumListPage' element={<StadiumListPage/>}/>
        <Route path='/page/StadiumInfoPage' element={<StadiumInfoPage/>}/>
        <Route path='/page/MyInfoPage' element={<MyInfoPage/>}/>
        
        <Route path='/page/TeamInfoFixPage' element={<TeamInfoFixPage/>}/>
        <Route path='/page/CreateTeamPage' element={<CreateTeamPage/>}/>
        <Route exact path="/page/TeamListPage" element={<TeamListPage />} />
        <Route path="/teams/:teamId" element={<TeamInfoPage />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
