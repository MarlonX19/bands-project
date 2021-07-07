import React, { useContext } from 'react';

import { AuthContext } from '../../context';
import { LogoutButton } from '../../components';

import './styles.css';

function Home() {
  const { handleLogout } = useContext(AuthContext);

  return (
      <div className='home-container'>
          <h1>Home aqui</h1>
          <LogoutButton handleLogout={handleLogout} />
      </div>
  )
}

export default Home;