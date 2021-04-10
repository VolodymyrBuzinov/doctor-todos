import { createAction } from "@reduxjs/toolkit";

const actionUpdatePatientRequest = createAction('AddPatient/UpdateRequest');
const actionUpdatePatientSuccess = createAction('AddPatient/UpdateSuccess');
const actionUpdatePatientError = createAction('AddPatient/UpdateError');

const exp = {
    actionUpdatePatientRequest,
    actionUpdatePatientSuccess,
    actionUpdatePatientError
}

export default exp;