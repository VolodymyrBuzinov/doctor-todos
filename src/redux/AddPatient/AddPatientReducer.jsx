import { createReducer } from "@reduxjs/toolkit";
import actions from './AddPatientActions'
const patient = createReducer({}, {
[actions.actionCreateUserSuccess]: (state, {payload}) => {
   console.log(payload);
   return payload;
}
})

export default patient; 