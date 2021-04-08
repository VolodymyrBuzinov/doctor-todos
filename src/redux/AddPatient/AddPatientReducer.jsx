import { createReducer } from "@reduxjs/toolkit";
import actions from './AddPatientActions'
const patient = createReducer({}, {
[actions.actionCreateUserSuccess]: (state, {payload}) => payload,
})

export default patient; 