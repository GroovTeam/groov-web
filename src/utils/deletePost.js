import axios from 'axios';
import ApiConfig from './ApiConfig';
import firebase from './Firebase';

async function deletePost(postID) {
  return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    };

    const postQuery = ApiConfig.deletePost + '/' + postID;

    return axios.delete(postQuery, config)
      .catch(error => console.error('Error: ', error));
  }).catch(console.error);
}

export default deletePost;