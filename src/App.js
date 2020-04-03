import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import Frends from './components/Frends/Frends';
import {BrowserRouter, Route} from 'react-router-dom';


const App = (props) => {
 
  return (

    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Route exact path="/dialogs" render={() => 
        <Dialogs state={props.state.dialogsPages} 
        dispatch = {props.dispatch}
        />} />
        <Route exact path="/profile" render={() =>
         <Profile profilePage={props.state.profilePage}
          dispatch={props.dispatch}          
        />} />
        <Route exact path="/settings" render={() => <Settings />} />
        <Route exact path="/music" render={() => <Music />} />
        <Route exact path="/news" render={() => <News />} />
        <Route exact path="/frends" render={() => <Frends />} />
      </div>
    </div>

  );
}


export default App;
