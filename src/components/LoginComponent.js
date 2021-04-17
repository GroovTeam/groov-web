import React, { useState, useEffect } from 'react';
import { Link, useHistory  } from 'react-router-dom';
import './RegisterBox.css';
import Login from '../utils/Login';
import firebase from 'firebase';
import VerifyEmail from './VerifyEmail';

const LoginComponent = () => {

  const [userData, setUserData] = useState({});
  const history = useHistory();
  const login = (event) => {
    Login(userData.email, userData.password);
    event.preventDefault();
  };

  const [signedIn, setSignedIn] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  
  const onAuthStateChanged = (user) => {

    // Check if the user has verified their email.
    if (user) {
      setSignedIn(true);
      setIsVerified(user.emailVerified);
    }
    else
      setSignedIn(false);
  };

  // Listen for auth state changes.
  useEffect(() => {    
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [firebase.auth()]);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUserData({ ...userData, [name]: value });
  };

  if (!signedIn)
  {
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
  }
  else if (!isVerified)
  {
    return (<VerifyEmail setEmailVerified={setIsVerified}/>);
  }

  else
  {
    history.push('/dashboard');
    return(<div></div>);
  }

};

export default LoginComponent;