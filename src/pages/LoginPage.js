import React from 'react';
import Nav from '../components/Nav';
import LoginComponent from '../components/LoginComponent';

function LoginPage() {
  return (
    <div >
      <Nav />
      <div style={{ marginLeft: 80 }}>
        <LoginComponent />
      </div>
      
    </div>
  );
  
}

export default LoginPage;