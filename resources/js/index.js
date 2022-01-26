import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import tabSlice from './reducers/tabSlice';
import userSlice from './reducers/userSlice';
import friendsSlice from './reducers/friendsSlice';
import projectsSlice from './reducers/projectsSlice';

import App from './App';


const store = configureStore({
  reducer: {
    user: userSlice,
    tab: tabSlice,
    projects: projectsSlice,
    friends: friendsSlice
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);