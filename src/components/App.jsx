import React from 'react';
import s from './App.module.css'
import Header from './Header';
import Nav from './Nav';
import Profile from './Profile';

export default function App() {
  return (
    <div className={s.wrapper}> 
      <Header />     
      <Nav />
      <Profile />
    </div>
  )
}