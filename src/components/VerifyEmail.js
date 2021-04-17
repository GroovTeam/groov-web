import React, {useEffect} from 'react';
import firebase from 'firebase';
import './RegisterBox.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Logout from '../utils/Logout';
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

  return (
    <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <div className='Base-Container'>
        <h2 style={{textAlign:'center', whiteSpace:'no-wrap', overflow:'hidden'}}>verify your email please :)</h2>
        <CircularProgress />
        
        <label>Or you could logout</label>
        <Button onClick={Logout}>
        Logout  
        </Button>

      </div>
    </div>);
};

export default VerifyEmail;