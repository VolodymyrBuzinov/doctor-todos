import actions from './UpdatePatientActions';
import axios from 'axios';



axios.defaults.baseURL = 'https://us-central1-rehabilitation-project.cloudfunctions.net';
const updatePatient = (patient, id) => dispatch => {
    dispatch(actions.actionUpdatePatientRequest());
    
    axios.put(`/patients/${id}`, patient).then(({data}) => dispatch(actions.actionUpdatePatientSuccess(data))).catch(err => {
        dispatch(actions.actionUpdatePatientError(err.message))
    })
}

export default updatePatient;