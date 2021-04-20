import Profile from '../pages/Profile';
import {useEffect} from 'react';

function ProfilePath({user, setUser}) {
  const userRef = user? (user.toString()) : undefined;
  
  useEffect(() => {
    return () =>
    {
      console.log('users ref is : ', userRef);
      setUser(undefined);
    };
  }, []);
  
  return (
    <div>
      <Profile username={userRef} setUser={setUser} />
    </div>
  );
}

export default ProfilePath;