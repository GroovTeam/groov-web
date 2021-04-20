import React, {useEffect} from 'react';
import firebase from 'firebase';
import './RegisterLogin.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Logout from '../utils/Logout';
import ResendVerification from '../utils/ResendVerification';
import Button from '@material-ui/core/Button';


const VerifyEmail = ( {setEmailVerified} ) =>
{
  useEffect(() => {
    const refresher = setInterval(() => {
      firebase.auth().currentUser.reload();
      if (firebase.auth().currentUser.emailVerified)
        setEmailVerified(true);
    }, 1000);
    return () => clearInterval(refresher);
  }, []);

  const resendVerification = () => {
    ResendVerification()
      .catch(console.error);
  };

  return (
    <div className='Verify-Box'>
      <h2 className='Verify-Header'>verify your email please :)</h2>
      <CircularProgress />
      
      <label>Or you could logout</label>
      <Button onClick={Logout}>
      Logout  
      </Button>

      <label>If the verification link expired, click below!</label>
      <Button onClick={resendVerification}>
      Resend Verification
      </Button>

    </div>);
};

export default VerifyEmail;