import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import firebase from '../utils/Firebase';
// import axios from 'axios';
// import ApiConfig from '../utils/ApiConfig';
import './RegisterBox.css';
import Login from '../utils/Login';

// Login a user with an email and password
// ideally this would be a modal
const LoginComponent = () => {

  const [userData, setUserData] = useState({});
  
  const login = (userData) => {
    const email = userData.email;
    const password = userData.password;
    Login(email, password)
      .catch(console.error);
  };
  
  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div style = {{display: 'flex', justifyContent: 'center'}}>
      <div className='BaseContainer'>
        <div className='Header'><h1> Register </h1></div>
        <div className='Content'>
          <form onSubmit={login}>
            <div className='form-group'>
              <div className='Header'><h1>Login</h1></div>
              <div>
                <label>email: </label>
                <input type="text" className="textField" name="email" placeholder="email" onChange={handleChange}/>
              </div>
              <label>password: </label>
              <input type="password" className="textField" name="password" placeholder="password" onChange={handleChange}/>
            </div>
            <div> 
              <Link style={{textDecoration: 'underlined', color: 'black'}} to='/register'>
                Not a registered user?
              </Link>
            </div>
            <div>
              <input type="Submit" value="Submit" readOnly={true}/>
              <button onClick={login}>
                Submit btn
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;