import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import './styles/index.css';
import IndexStateProvider from './context/IndexContext/IndexStateProvider';
import App from './app/App';

render(
  <React.StrictMode>
    <IndexStateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IndexStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
