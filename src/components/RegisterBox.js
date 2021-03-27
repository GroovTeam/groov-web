import React, { useState } from 'react';
import Register from '../utils/Register';



const RegisterBox = () => {
  const [userData, setUserData] = useState({});

  const registerUser = (event) => {
    console.log(userData);
    Register(userData.email,
      userData.password,
      userData.username,
      userData.firstName,
      userData.lastName)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
    event.preventDefault();
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUserData({...userData, [name]:value});
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