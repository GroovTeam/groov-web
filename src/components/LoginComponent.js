import React, { useState, useEffect } from 'react';
import { Link, useHistory  } from 'react-router-dom';
import './RegisterBox.css';
import Login from '../utils/Login';
import firebase from 'firebase';
import VerifyEmail from './VerifyEmail';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { RemoveRedEye } from '@material-ui/icons';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';


const LoginComponent = () => {

  const [userData, setUserData] = useState({});
  const [signedIn, setSignedIn] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [open, setOpen] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [popup, setPopup] = useState ({severity: 'error', message:''});
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
  
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
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

  const Alert = (props) =>  {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  if (!signedIn)
  {
    return (
      <div style = {{display: 'flex', justifyContent: 'center'}}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={popup.severity}>
            {popup.message}
          </Alert>
        </Snackbar>
        <div className='Base-Container'>
          <div className='Content'>
            <form onSubmit={login}>
              <div className='Header'><h1>Login</h1></div>
              <div className='form-group'>  
                <label>Email </label>
                <input type="text" className="textField" name="email" placeholder="email" onChange={handleChange}/>
              </div>
              <div className='form-group' style={{display: 'flex'}}>
                <label>
                  Password
                  <RemoveRedEye onClick={togglePasswordVisiblity} style={{display: 'flex', justifyContent: 'row-reverse'}}>Show/hide password</RemoveRedEye>
                </label>
                <input type={passwordShown ? 'text' : 'password'} className='textField' name='password' placeholder='password' onChange={handleChange} id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start" label="password">
                      <AccountCircle />
                    </InputAdornment>}
                />
              </div>
              <label style={{display: 'flex', flexDirection: 'column', alignSelf:'center'}}>
                <Link style={{ textDecoration: 'underlined', color: 'black'}} to='/register'>
                  Forgot your password?
                </Link>  
                <Link style={{textDecoration: 'underlined', color: 'black'}} to='/register'>
                  Not a registered user?
                </Link>
              </label>
              <input type="Submit" className="buttonInput" value="Login" readOnly={true}/>
            </form>
          </div>
        </div>
      </div>
    );
  }
  else if (!isVerified)
  {
    return (<div style={{height:'100%' }}><VerifyEmail setEmailVerified={setIsVerified}/></div>);
  }

  else
  {
    history.push('/dashboard');
    return(<div></div>);
  }

};

export default LoginComponent;