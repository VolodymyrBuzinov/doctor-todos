import { createReducer } from "@reduxjs/toolkit";
import actions from './AddPatientActions'
const patient = createReducer({}, {
[actions.actionCreatePatientSuccess]: (state, {payload}) => payload,
})

export default patient; 