import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';

const middleware = [
  ...getDefaultMiddleware(),
];

const mainReducer = combineReducers({
  database: {

  },  
});

const store = configureStore({ reducer: mainReducer, middleware, devTools: process.env.NODE_ENV === 'development' });


const exported = store
export default exported;