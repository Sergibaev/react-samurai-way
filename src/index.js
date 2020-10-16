import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

let postsData = [
  {id: '1', message:'What is this?', likesCount: 15,},
  {id: '2', message:'U are dumn', likesCount: 47,},
  {id: '3', message:'Would you break up?', likesCount: 5,},        
]

let dialogsData = [
  {id: '1', name:'Aidos'},
  {id: '2', name:'Dimych'},
  {id: '3', name:'Masha'},
  {id: '4', name:'Pasha'},
  {id: '5', name:'Sasha'},
]

let messagesData = [
  {id: '1', text:'Hay'},
  {id: '2', text:'How are you?'},
  {id: '3', text:'Would you break up?'},        
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogsData} posts={postsData} msg={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);
