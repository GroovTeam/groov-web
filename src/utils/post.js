import axios from 'axios';
import ApiConfig from './ApiConfig';
import firebase from './Firebase';


async function post(post) {
  return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
    console.log(token);
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    };

    return axios.post(ApiConfig.post, post, config)
      .catch(error => console.error('Error: ', error));
  }).catch(console.error);
}

export default post;