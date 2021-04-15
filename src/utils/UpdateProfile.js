import axios from 'axios';
import ApiConfig from './ApiConfig';
import firebase from './Firebase';

async function UpdateProfile(userData) {
  return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    };
    console.log(userData);
    return axios.post(ApiConfig.user, userData, config)
      .catch(error => console.error('Error: ', error));
  }).catch(console.error);
}

export default UpdateProfile;