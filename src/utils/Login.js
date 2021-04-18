import firebase from './Firebase';

const Login = async (email, password) => {

  const userData = {
    email: email,
    password: password,
  };
  let errorMessage = null;

  if (isEmpty(userData.email))
  {
    throw Error(JSON.stringify('Email field cannot be empty'));
  }
    
  else if (isEmpty(userData.password))
    throw Error(JSON.stringify('Password field cannot be empty'));

  await firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
    .then(response => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
      errorMessage = error.code;});
  if (!errorMessage)
    return;
  else if (errorMessage.normalize() === 'auth/user-not-found'.normalize())
    throw Error(JSON.stringify('Username or password is invalid'));
  else if (errorMessage.normalize() === 'auth/invalid-email'.normalize())
    throw Error(JSON.stringify('The email address is badly formatted'));

};

const isEmpty = (str) => {
  return (str === undefined || str === '');
}; 


export default Login;