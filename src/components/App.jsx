import React from 'react';
import './App.css'
import Header from './Header';
import Nav from './Nav';
import Profile from './Profile';

export default function App() {
  return (
    <div className='app-wrapper'> 
      <Header />     
      <Nav />
      <Profile />
    </div>
  )
}