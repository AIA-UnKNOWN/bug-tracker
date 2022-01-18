import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import userSlice from './reducers/userSlice';

import App from './App';


const store = configureStore({
  reducer: {
    user: userSlice
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);