import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import patient from './AddPatient/AddPatientReducer';
import updatedPatient from './UpdatePatient/UpdatePatientReducer.jsx';
const middleware = [
  ...getDefaultMiddleware(),
];

const mainReducer = combineReducers({  
    patient, 
    updatedPatient    
});

const store = configureStore({ reducer: mainReducer, middleware, devTools: process.env.NODE_ENV === 'development' });



export default store;