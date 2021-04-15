import React, { useState } from 'react';
import Register from '../utils/Register';
import './RegisterBox.css';

const RegisterBox = () => {
  const [userData, setUserData] = useState({});

  const registerUser = (event) => {
    console.log(userData);
    setUserData({ ...userData, dateCreated: Date.now()});
    Register(userData.email, userData.password, userData.username, 
      userData.firstName, userData.lastName);
    event.preventDefault();
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUserData({ ...userData, [name]: value });
    console.log(userData);
  };

  return (
    <div style ={{display: 'flex', justifyContent: 'center'}}>
      <div className='Base-Container'>
        <div className='Header'><h1> Register </h1></div>
        <div className='Content'>
          <form onSubmit={registerUser}>
            <div className='form-group'>
              <label >
                First Name
              </label>
              <input type='text' className='textField' name='firstName' placeholder='first name' onChange={handleChange} />
            </div>
            <div className='form-group'>
              <label >
                Last Name
              </label>
              <input type='text' className='textField' name='lastName' placeholder='last name' onChange={handleChange} />
            </div>
            <div className='form-group'>
              <label >
                Email
              </label>
              <input type='text' className='textField'name='email' placeholder='email' onChange={handleChange} />
            </div>
            <div className='form-group'>
              <label >
                Username
              </label>
              <input type='text' className='textField'name='username' placeholder='username' onChange={handleChange} />
            </div>
            
            <div className='form-group'>
              <label >
                Password
              </label>
              <input type='text' className='textField' name='password' placeholder='password' onChange={handleChange} />
            </div>
            <input type='Submit' className='buttonInput' value='Register' readOnly={true}/>
          </form>
        </div>
      </div>
    </div>
  );
};



export default RegisterBox;