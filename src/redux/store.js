import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import patient from './AddPatient/AddPatientReducer';

const middleware = [
  ...getDefaultMiddleware(),
];

const mainReducer = combineReducers({  
    patient,     
});

const store = configureStore({ reducer: mainReducer, middleware, devTools: process.env.NODE_ENV === 'development' });



export default store;