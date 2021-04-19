import firebase from './Firebase';

async function ResendVerification() {
  console.log('Link Sent!');
  console.log(firebase.auth().currentUser);
  return firebase.auth().currentUser.sendEmailVerification();
}

export default ResendVerification;