import Profile from '../pages/Profile';
import {useState, useEffect} from 'react';

function ProfilePath({user}) {
  const [userRef, setUserRef] = useState(undefined);
  
  const getUserInfo = () => {
    if (user !== undefined)
      setUserRef(user);
    
    console.log('user ref is : ', userRef);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <Profile username={'romont'} />
    </div>
  );
}

export default ProfilePath;