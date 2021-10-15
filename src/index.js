import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { Icon } from '@iconify/react';
import './styles/main.scss';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
