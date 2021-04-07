import axios from 'axios';
import ApiConfig from './ApiConfig';
import firebase from './Firebase';

async function removePosses(posse) {
  return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    };

    return axios.post(ApiConfig.leavePosse, posse, config)
      .catch(error => console.error('Error: ', error));
  }).catch(console.error);
}

export default removePosses;