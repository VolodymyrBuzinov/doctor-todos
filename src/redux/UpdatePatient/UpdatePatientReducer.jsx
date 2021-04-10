import { createReducer } from "@reduxjs/toolkit";
import actions from './UpdatePatientActions'
const updatedPatient = createReducer({}, {
[actions.actionUpdatePatientSuccess]: (state, {payload}) => payload,
})

export default updatedPatient; 