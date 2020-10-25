import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './redux/store'

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
    <React.StrictMode>
      <App state={state} 
            dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState())

store.subscriber(rerenderEntireTree)