import React from 'react';
import Nav from '../components/Nav';
import Login from '../components/Login';

function LoginPage() {
  return (
    <div >
      <Nav />
      <div style={{ marginLeft: 80 }}>
        <Login />
      </div>
      
    </div>
  );
  
}

export default LoginPage;