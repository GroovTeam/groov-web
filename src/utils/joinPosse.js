import axios from 'axios';
import ApiConfig from './ApiConfig';
import firebase from './Firebase';

async function joinPosse(posse) {
  return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    };
    const joinQuery = ApiConfig.joinPosse + posse.posseID;
    return axios.post(joinQuery, {}, config)
      .catch(error => console.error('Error: ', error));
  }).catch(console.error);
}

export default joinPosse;