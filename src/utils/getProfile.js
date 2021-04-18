import axios from 'axios';
import ApiConfig from './ApiConfig';
import firebase from './Firebase';

async function getProfile(username) {
  return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    };
    const userQuery = ApiConfig.user + '/' + username;

    return axios.get(userQuery, config)
      .catch(error => console.error('Error: ', error));
  }).catch(console.error);
}

export default getProfile;