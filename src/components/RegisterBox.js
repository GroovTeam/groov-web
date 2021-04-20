import React, { useState } from 'react';
import Register from '../utils/Register';
import '../styling/RegisterBox.css';
import { Link, useHistory  } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const RegisterBox = () => {
  const [userData, setUserData] = useState({});
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState ({severity: 'error', message:''});
  const history = useHistory();

  const registerUser = (event) => {
    console.log(userData);
    setUserData({ ...userData});
    Register(userData.email, userData.password, userData.username, 
      userData.firstName, userData.lastName)
      .then(() =>
      {
        setPopup({severity: 'success', message:'Account successfully created! You will now be redirected to the login page'});
        openPopup();
      })
      .catch((error) => {
        setPopup({severity:'error', message: error.message});
        openPopup();
      });
    event.preventDefault();
  };
  // I need to control color and message 
  const openPopup = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    history.push('/');
  };
  
  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUserData({ ...userData, [name]: value });
  };

  const Alert = (props) =>  {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  return (
    <div style ={{display: 'flex', justifyContent: 'center'}}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={popup.severity}>
          {popup.message}
        </Alert>
      </Snackbar>
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
            <label>
              <Link style={{textDecoration: 'underlined', color: 'black', alignSelf:'center'}} to='/'>
                Already have an account?
              </Link>
            </label>
            
            <input type='Submit' className='buttonInput' value='Register' readOnly={true}/>
          </form>
        </div>
      </div>
    </div>
  );
};



export default RegisterBox;