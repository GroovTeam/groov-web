/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import ApiConfig from './ApiConfig';
import firebase from './Firebase';

async function post(post) {
  return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
    const config = {
      header: {Authorization: `Bearer ${token}`}
    };

    return axios.post(ApiConfig.post, post, config)
      .then(response => response.json())
      .catch(error => console.error('Error: ', error));
  }).catch(console.error);
}

export default post;