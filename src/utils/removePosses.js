import axios from 'axios';
import ApiConfig from './ApiConfig';
import firebase from './Firebase';

async function removePosses(posse) {
  return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    };
    
    const removeURL = ApiConfig.leavePosse + posse;
    return axios.post(removeURL, {}, config)
      .catch(error => console.error('Error: ', error));
  }).catch(console.error);
}

export default removePosses;