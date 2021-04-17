import axios from 'axios';
import ApiConfig from './ApiConfig';

const Register = async (email, password, username, firstName, lastName) => {

  let userData = {
    email: email,
    password: password,
    username: username,
    firstName: firstName,
    lastName: lastName,
    
  };


  if (isEmpty(userData.email))
    throw Error(JSON.stringify('Email field cannot be empty'));
  else if (isEmpty(userData.password))
    throw Error(JSON.stringify('Password field cannot be empty'));
  else if (isEmpty(userData.username))
    throw Error(JSON.stringify('Username field cannot be empty'));
  else if (isEmpty(userData.firstName))
    throw Error(JSON.stringify('First Name field cannot be empty'));
  else if (isEmpty(userData.lastName))
    throw Error(JSON.stringify('Last Name field cannot be empty'));
  
  axios.post(
    ApiConfig.register,
    userData
  ).then(result => {
    console.log(result);
  }).catch((error) => {
    let errorCode = error.message;
    let errorMessage = error.response.data.message;
    console.log(error.response); 
    console.error(errorCode);
    console.error(errorMessage);});
  
};

const isEmpty = (str) => {
  return (str === undefined || str === '');
}; 


export default Register;