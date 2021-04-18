import axios from 'axios';
import ApiConfig from './ApiConfig';
import firebase from './Firebase';

async function getOtherUsersPosts(username) {
  return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
    
    const config = {
      headers: { Authorization: `Bearer ${token}`},
    };
    return axios.get(ApiConfig.userPosts + '/' + username, config)
      .catch(error => console.error('Error: ', error));
  }).catch(console.error);
}

export default getOtherUsersPosts;