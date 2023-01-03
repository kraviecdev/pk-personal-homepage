import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './core/App';
import reportWebVitals from './reportWebVitals';
import store from './core/store';

import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();