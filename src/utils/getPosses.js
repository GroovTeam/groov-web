/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import axios from 'axios';
import ApiConfig from './ApiConfig';
import firebase from './Firebase';

async function getPosses() {
  return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
    const config = {
      header: {Authorization: `Bearer ${token}`}
    };

    return axios.get(ApiConfig.posses, config)
      .then(response => response.json())
      .catch(error => console.error('Error: ', error));
  }).catch(console.error);
}

export default getPosses;