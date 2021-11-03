import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import './index.css';
import App from './App';
import { StoreProvider } from './store/Provider';
import { Store } from './store/store';

// initialize mobx
configure({ enforceActions: 'observed' });

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={new Store()}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
