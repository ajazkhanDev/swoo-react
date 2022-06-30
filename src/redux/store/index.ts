import { configureStore } from '@reduxjs/toolkit';
import { name, reducer } from '../reducers/index';

const store = configureStore({
  reducer: {
    [name]: reducer,
  },
});

export default store;