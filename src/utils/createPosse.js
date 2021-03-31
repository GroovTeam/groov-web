/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import axios from 'axios';
import ApiConfig from './ApiConfig';
import firebase from './Firebase';

let token = 'eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJlbWFpbCI6InBlcnNvbkBlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImF1dGhfdGltZSI6MTYxNzEyNzYwNCwidXNlcl9pZCI6IjJOTjJyYkJCdUVRWDV6TXBKOXp3NXNnd0QwWmciLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInBlcnNvbkBlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9LCJpYXQiOjE2MTcxMjc2MDQsImV4cCI6MTYxNzEzMTIwNCwiYXVkIjoidGhlcG9vcGNyZXctNTI4ZTQiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdGhlcG9vcGNyZXctNTI4ZTQiLCJzdWIiOiIyTk4ycmJCQnVFUVg1ek1wSjl6dzVzZ3dEMFpnIn0.';

async function createPosse(posse) {
  return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
    const config = {
      header: {Authorization: `Bearer ${token}`}
    };

    return axios.post(ApiConfig.createPosse, posse, config)
      .then(response => response.json())
      .catch(error => console.error('Error: ', error));
  }).catch(console.error);
}

export default createPosse;