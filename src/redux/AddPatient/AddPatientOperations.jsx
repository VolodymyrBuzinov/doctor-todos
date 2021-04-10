import axios from 'axios';
import actions from './AddPatientActions';

axios.defaults.baseURL = 'https://us-central1-rehabilitation-project.cloudfunctions.net';
const createPatient = (patient) => dispatch => {   
    actions.actionCreatePatientRequest();
    
    axios.post('/patients', patient)
    .then( ({ data }) => dispatch(actions.actionCreatePatientSuccess(data)))
    .catch(err => actions.actionCreatePatientError(err.message))
}

export default createPatient;