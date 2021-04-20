import React, { useState, useEffect } from 'react';
import { Link, useHistory  } from 'react-router-dom';
import './RegisterLogin.css';
import Login from '../utils/Login';
import firebase from 'firebase';
import VerifyEmail from './VerifyEmail';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const LoginComponent = () => {

  const [userData, setUserData] = useState({});
  const [signedIn, setSignedIn] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState({severity: 'error', message:''});
  const [emailReset, setEmailReset] = useState(false);
  const [emailForReset, setEmailForReset] = useState('');
  const history = useHistory();

  const login = (event) => {
    Login(userData.email, userData.password)
      .catch((error) => {
        setPopup({severity:'error', message: error.message});
        openPopup();
      });
    event.preventDefault();
  };

  const openPopup = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  
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

  const handleResetChange = (event) => {
    const target = event.target;
    const value = target.value;
    setEmailForReset(value);
  };

  const handleReset = () => {
    setEmailReset(!emailReset);
  };

  const resetPassword = () => {

    if (emailForReset == '') return;

    firebase.auth().sendPasswordResetEmail(emailForReset)
      .then(() => {
        setEmailReset(false);
        setPopup({severity: 'success', message: 'A verification email will be sent if the email exists'});
        openPopup();
      })
      .catch(() => {
        setPopup({ severity: 'error', message: 'Something went wrong, please try again' });
        openPopup();
      });
    
  };

  const Alert = (props) =>  {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  if (!signedIn)
  {
    return (
      <div className='Outer-Container'>
        
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={popup.severity}>
            {popup.message}
          </Alert>
        </Snackbar>
        
        <div className='Base-Container'>
          <div className='Content'>
            {
              !emailReset ? (
                <form onSubmit={login}>
                  
                  <div className='Header'><h1>Login</h1></div>
                  <div className='form-group'>  
                    <label>Email </label>
                    <input type="text" className="textField" name="email" placeholder="email" onChange={handleChange}/>
                  </div>
                  <div className='form-group'>
                    <div className='Forgot-Password'>
                      <label>Password</label>
                      <Link className='Link' to='/'onClick={handleReset}>
                        Forgot your password?
                      </Link>
                    </div>
                    <input type="password" className="textField" name="password" placeholder="password" onChange={handleChange}/>
                  </div>
                  <input type="Submit" className="buttonInput" value="Login" readOnly={true}/>
                </form>
              ) :
                (
                  <div>
                    <div className='Header'><h1>Password Reset</h1></div>
                    <label>Email</label>
                    <input type="text" className="textField" name="email" placeholder="email" onChange={handleResetChange}/>
                    <input type="Submit" className="buttonInput" value="Reset Password" readOnly={true} onClick={resetPassword}/>
                    <input type="Submit" className="buttonInput" value="Cancel" readOnly={true} onClick={handleReset} />
                  </div>
                )
            }
          </div>
        </div>
        <p>{'Not registered? '}   
          <Link className='Link' to='/register'>
             Register here!
          </Link>
        </p>
      </div>
      
    );
  }
  else if (!isVerified)
  {
    return (<div className='Verify-Container'><VerifyEmail setEmailVerified={setIsVerified}/></div>);
  }

  else
  {
    history.push('/dashboard');
    return(<div></div>);
  }

};

export default LoginComponent;