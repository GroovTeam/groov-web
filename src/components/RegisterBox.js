import React from 'react';

function RegisterBox(  ) {
  return (
    <div>
      <div className = "Header">Register</div>
      <div className="Content">
        <div className="form">
          <div className="form-group">
            <label htmlFor="FirstName">FirstName</label>
            <input type="text" name="firstname" placeholder="first name" />
          </div>
          <div className="form-group">
            <label htmlFor="LastName">LastName</label>
            <input type="text" name="lastname" placeholder="last name" />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="text" name="email" placeholder="email" />
          </div>
          <div className="form-group">
            <label htmlFor="Username">Username</label>
            <input type="text" name="username" placeholder="username"/>
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input type="text" name="password" placeholder="password"/>
          </div>
        </div>
        
      </div>
      <div className="footer">
        <button type = "button" className="btn">
          Register
        </button>
      </div>
    </div>
  );
}

export default RegisterBox;