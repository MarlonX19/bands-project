import React, { useContext } from 'react';

import { AuthContext } from '../../context';

import './styles.css';

function Login() {
  const { handleLogin } = useContext(AuthContext);

  function LoginUser() {
    handleLogin();
  }

  return (
      <div className='login-container'>
          <button type='button' onClick={() => LoginUser()}>Fazer login</button>
      </div>
  )
}

export default Login;