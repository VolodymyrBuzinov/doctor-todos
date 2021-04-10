import { createAction } from "@reduxjs/toolkit";

const actionCreatePatientRequest = createAction('AddPatient/CreateRequest');
const actionCreatePatientSuccess = createAction('AddPatient/CreateSuccess');
const actionCreatePatientError = createAction('AddPatient/CreateError');

const exp = {
    actionCreatePatientRequest,
    actionCreatePatientSuccess,
    actionCreatePatientError
}

export default exp;