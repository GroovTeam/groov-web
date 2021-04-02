import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../utils/Firebase';
import axios from 'axios';
import ApiConfig from '../utils/ApiConfig';

// Login a user with an email and password
const Login = () => {

  const [userData, setUserData] = useState({});
  
  const login = (userData) => {
    axios.post(
      ApiConfig.login,
      userData
    ).then(result => {
      if (result.data.token) {
        firebase.auth().signInWithEmailAndPassword(
          userData.email,
          userData.password
        ).then(userCred => {
          userCred.sendEmailVerification();
        }).catch(console.error);
      }
    }).catch(console.error);  
  };
  
  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={login}>
        <div>
          <h1>Sign in</h1>
          <label>email: </label>
          <input type="text" name="email" placeholder="email" onChange={handleChange}/>
          <label>password: </label>
          <input type="password" name="password" placeholder="password" onChange={handleChange}/>
        </div>
        <div> 
          <Link style={{textDecoration: 'underlined', color: 'black'}} to='/register'>
            Not a registered user?
          </Link>
        </div>
        <div>
          <input type="Submit" value="Submit" readOnly={true}/>
        </div>
      </form>
    </div>
  );
};

export default Login;