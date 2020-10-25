import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.css'
import Dialogs from './Dialogs/Dialogs';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Profile from './Profile/Profile';
import Music from './Music/Music'
import News from './News/News'
import Settings from './Settings/Settings'
import Friends from './Friends/Friends';

export default function App(props) {
  
  return (
    <BrowserRouter>
      <div className={s.wrapper}> 
        <Header />     
        <Nav />
        <div className={s.content}>
          <Route path='/profile' render={ () => <Profile state={props.state.profilePage} 
                                                          dispatch={props.dispatch} /> } />
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.messagesPage} /> } />
          <Route path='/news' render={ () => <Music /> } />
          <Route path='/music' render={ () => <News /> } />
          <Route path='/settings' render={ () => <Settings /> } />
          <Route path='/friends' render={ () => <Friends /> } />
        </div>           
      </div>
    </BrowserRouter>
    
  )
}