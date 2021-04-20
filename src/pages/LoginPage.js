import React from 'react';
import LoginComponent from '../components/LoginComponent';
import '../components/RegisterLogin.css';
function LoginPage() {
  return (
    <div className='PageContainer'>
      <img className='Image' src={'https://cdn.pixabay.com/photo/2017/08/04/20/10/dj-2581269_960_720.jpg'}/>
      <LoginComponent/>
    </div>
  );
  
}

export default LoginPage;