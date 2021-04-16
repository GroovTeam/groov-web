import axios from 'axios';
import ApiConfig from './ApiConfig';
import firebase from './Firebase';

async function likeComment(commentID) {
  return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    };

    const commentQuery = ApiConfig.likeComment + '/' + commentID;

    return axios.post(commentQuery, {}, config)
      .catch(error => console.error('Error: ', error));
  }).catch(console.error);
}

export default likeComment;