import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterBox.css';
import Login from '../utils/Login';

const LoginComponent = () => {

  const [userData, setUserData] = useState({});
  
  const login = (event) => {
    Login(userData.email, userData.password).catch(console.error);
    event.preventDefault();
  };
  
  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div style = {{display: 'flex', justifyContent: 'center'}}>
      <div className='Base-Container'>
        <div className='Content'>
          <form onSubmit={login}>
            <div className='form-group'>
              <div className='Header'><h1>Login</h1></div>
              <label>Email </label>
              <input type="text" className="textField" name="email" placeholder="email" onChange={handleChange}/>
              <label>Password</label>
              <input type="password" className="textField" name="password" placeholder="password" onChange={handleChange}/>
              
            </div>
            <label style={{display: 'flex', flexDirection: 'column'}}>
              <Link style={{ textDecoration: 'underlined', color: 'black'}} to='/register'>
                  Forgot your password?
              </Link>  
              <Link style={{textDecoration: 'underlined', color: 'black'}} to='/register'>
                Not a registered user?
              </Link>
            </label>
            <div>
              <input type="Submit" className="buttonInput" value="Submit" readOnly={true}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;