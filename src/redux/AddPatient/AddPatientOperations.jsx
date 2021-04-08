import axios from 'axios';
import actions from './AddPatientActions';

axios.defaults.baseURL = 'https://us-central1-rehabilitation-project.cloudfunctions.net';
const createPatient = (patient) => dispatch => {
    console.log(patient);
    actions.actionCreateUserRequest();
    
    axios.post('/patients', patient)
    .then( ({ data }) => dispatch(actions.actionCreateUserSuccess(data)))
    .catch(err => actions.actionCreateUserError(err.message))
}

export default createPatient;