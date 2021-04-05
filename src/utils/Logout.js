import firebase from './Firebase';

async function Logout() {
  console.log('user is logged out');
  return firebase.auth().signOut();
}

export default Logout;