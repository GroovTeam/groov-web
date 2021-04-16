import axios from 'axios';
import ApiConfig from './ApiConfig';
import firebase from './Firebase';

async function reply(commentID,  reply) {
  return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    };

    const replyQuery = ApiConfig.reply + '/' + commentID;

    return axios.post(replyQuery, reply, config)
      .catch(error => console.error('Error: ', error));
  }).catch(console.error);
}

export default reply;