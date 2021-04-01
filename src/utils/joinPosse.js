/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import axios from 'axios';
import ApiConfig from './ApiConfig';
import firebase from './Firebase';

async function joinPosse(posse) {
  return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    };

    return axios.post(ApiConfig.joinPosse, posse, config)
      .catch(error => console.error('Error: ', error));
  }).catch(console.error);
}

export default joinPosse;