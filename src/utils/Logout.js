import firebase from './Firebase';

async function Logout() {
  console.log('user is logged out');
  console.log(firebase.auth().currentUser);
  return firebase.auth().signOut();
}

export default Logout;