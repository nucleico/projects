import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeContextProvider from './context/ThemeContext';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
  </Provider>,
  document.getElementById('root')
);
