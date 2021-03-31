import React, { useState } from 'react';
import firebase from '../utils/Firebase';
import axios from 'axios';
import ApiConfig from '../utils/ApiConfig';



const RegisterBox = () => {
  const [userData, setUserData] = useState({});

  const register = (userData) =>
  {
    axios.post(
      ApiConfig.register,
      userData
    ).then(result => {
      if (result.data.token)
        firebase.auth().signInWithEmailAndPassword(
          userData.email,
          userData.password
        ).then(userCred => {
          userCred.user.sendEmailVerification();
        }).catch(console.error);
    }).catch(console.error);
  };
  const registerUser = (event) => {
    console.log(userData);
    setUserData({ ...userData, dateCreated: Date.now()});
    register(userData);
    event.preventDefault();
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <div className = "Header">Register</div>
      <div className="Content">
        <form onSubmit={registerUser}>
          <label >
          FirstName
            <input type="text" name="firstName" placeholder="first name" onChange={handleChange}/>
          </label>
          <label >
            LastName
            <input type="text" name="lastName" placeholder="last name" onChange={handleChange} />
          </label>
          
          <label >
            Email
            <input type="text" name="email" placeholder="email" onChange={handleChange} />
          </label>
          
          <label >
            Username
            <input type="text" name="username" placeholder="username" onChange={handleChange}/>
          </label>
          
          <label >
            Password
            <input type="text" name="password" placeholder="password" onChange={handleChange}/>
          </label>

          <input type="Submit" value="Submit" readOnly={true}/>
        </form>
        
      </div>

    </div>
  );
};



export default RegisterBox;