import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ListContextProvider} from './components/context'


ReactDOM.render(  
  <ListContextProvider>
    <App />
  </ListContextProvider>,
  document.getElementById('root')
);