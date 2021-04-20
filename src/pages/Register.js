import React from 'react';
import RegisterBox from '../components/RegisterBox';
import '../components/RegisterLogin.css';

function Register() {

  return (
    <div className='PageContainer'>
      <img className='Image' src={'https://cdn.pixabay.com/photo/2015/05/15/14/31/amplifier-768536_960_720.jpg'} alt="" />
      <RegisterBox />
    </div>
    
  );
  
}

export default Register;