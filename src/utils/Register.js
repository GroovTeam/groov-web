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

  axios.post(
    ApiConfig.register,
    userData
  ).then(result => {
    console.log(result);
  }).catch((error) => {
    let errorCode = error.message;
    let errorMessage = error.response.data.message;
    console.error(errorCode);
    console.error(errorMessage);});
  
};

export default Register;