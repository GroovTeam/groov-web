import {useEffect} from 'react';
import PosseProfile from './PosseProfile';

function PosseProfilePath({posse, setPosse}) {
  const posseRef = posse ? posse : undefined;
  
  useEffect(() => {
    return () =>
    {
      console.log('users ref is : ', posseRef);
      setPosse(undefined);
    };
  }, []);
  
  return (
    <div>
      <PosseProfile posseName={posseRef} setPosse={setPosse} />
    </div>
  );
}

export default PosseProfilePath;