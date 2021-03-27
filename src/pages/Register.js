import React from 'react';
import Nav from '../components/Nav';
import RegisterBox from '../components/RegisterBox';

function Register() {
  return (
    <div >
      <Nav />
      <div style={{ marginLeft: 80 }}>
        <RegisterBox />
      </div>
      
    </div>
  );
  
}

export default Register;