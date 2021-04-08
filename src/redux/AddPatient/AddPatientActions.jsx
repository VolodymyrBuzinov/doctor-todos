import { createAction } from "@reduxjs/toolkit";

const actionCreateUserRequest = createAction('AddPatient/CreateRequest');
const actionCreateUserSuccess = createAction('AddPatient/CreateSuccess');
const actionCreateUserError = createAction('AddPatient/CreateError');

const exp = {
    actionCreateUserRequest,
    actionCreateUserSuccess,
    actionCreateUserError
}

export default exp;