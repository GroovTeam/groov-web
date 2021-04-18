import axios from 'axios';
import ApiConfig from './ApiConfig';
import firebase from './Firebase';

async function getUserPosts() {
  return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
    
    const config = {
      headers: { Authorization: `Bearer ${token}`},
    };
    return axios.get(ApiConfig.userPosts, config)
      .catch(error => console.error('Error: ', error));
  }).catch(console.error);
}

export default getUserPosts;