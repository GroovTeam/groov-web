import axios from 'axios';
import ApiConfig from './ApiConfig';
import firebase from './Firebase';

async function postComments(postID,  comment) {
  return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    };

    const commentQuery = ApiConfig.comments + '/' + postID;

    return axios.post(commentQuery, comment, config)
      .catch(error => console.error('Error: ', error));
  }).catch(console.error);
}

export default postComments;