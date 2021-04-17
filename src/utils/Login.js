import firebase from './Firebase';

const Login = async (email, password) => {

  const userData = {
    email: email,
    password: password,
  };

  if (isEmpty(userData.email))
  {
    throw Error(JSON.stringify('Email field cannot be empty'));
  }
    
  else if (isEmpty(userData.password))
    throw Error(JSON.stringify('Password field cannot be empty'));

  let res;

  firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
    .then(response => {
      console.log(response); 
      res = response;
    })
    .catch(err => {console.error(err.message);});

  console.log(userData);

  return res;
};

const isEmpty = (str) => {
  return (str === undefined || str === '');
}; 


export default Login;