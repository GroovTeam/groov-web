import firebase from './Firebase';

const Login = async (email, password) => {

  const userData = {
    email: email,
    password: password,
  };

  const { errors, valid } = validateData(userData);
  if (!valid)
    throw Error(JSON.stringify(errors));

  const res;

  firebase.auth().signInUserWithEmailAndPassword(userData.email, userData.password)
    .then(response => { console.log(response); res = response; })
    .catch(err => { throw Error(JSON.stringify(err)); });

  return res;
};

const isEmpty = (str) => {
  return (str === undefined || str === '');
}; 

// Data validation
const validateData = (data) => {
  let errors = {};

  if (isEmpty(data.email))
    errors.email = 'Cannot be empty';
  if (isEmpty(data.password))
    errors.password = 'Cannot be empty';

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

export default Login;