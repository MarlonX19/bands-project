import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import { AuthContext } from './context';

import { Home, Detail, Login } from './pages';

function CustomRoute({ isAuth, isPrivate, ...rest }) {
    const { authenticated, loadingLog } = useContext(AuthContext);

    if(loadingLog) {
        return <h1>Fazendo login!</h1>
    }

    if(isAuth && authenticated){
        return <Redirect to='/home' />
    }

    if(isPrivate && !authenticated) {
        return <Redirect to='/' />
    }

    return <Route { ...rest} />
}


function Routes() {
  return (
      <Router>
          <Switch>
          <CustomRoute exact isAuth path='/'>
                <Login />
            </CustomRoute>
            <CustomRoute isPrivate path='/home'>
                <Home />
            </CustomRoute>
            <CustomRoute isPrivate path='/detail'>
                <Detail />
            </CustomRoute>
          </Switch>
      </Router>
  )
}

export default Routes;