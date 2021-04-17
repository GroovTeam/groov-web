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

  let errorMessage = null;

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
  
  await axios.post(
    ApiConfig.register,
    userData
  ).then(result => {
    console.log(result);
  }).catch((error) => {
    errorMessage = error.response.data.message;});
  if (errorMessage)
    throw Error(JSON.stringify(errorMessage));

};

const isEmpty = (str) => {
  return (str === undefined || str === '');
}; 


export default Register;