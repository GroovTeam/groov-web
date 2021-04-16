import React, {useEffect} from 'react';
import firebase from 'firebase';

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
    <div>
      <p>verify your email please.</p>
    </div>);
};

export default VerifyEmail;