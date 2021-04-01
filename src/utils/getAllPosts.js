/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import ApiConfig from './ApiConfig';
import firebase from './Firebase';

async function getAllPosts() {
  return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
    
    const config = {
      headers: { Authorization: `Bearer ${token}`},
    };
    return axios.get(ApiConfig.allPosts, config)
      .catch(error => console.error('Error: ', error));
  }).catch(console.error);
}

export default getAllPosts;