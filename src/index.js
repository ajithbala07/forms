import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Newapp from './Newapp';
import reportWebVitals from './reportWebVitals';
import Data from './Data';
import Form1 from './Form1';
import Data2 from './Data2';
import NewForm from './NewForm';

ReactDOM.render(
  <React.StrictMode>
    <Newapp />
    <NewForm />
    <Data2 />
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
