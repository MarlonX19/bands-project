import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import { AuthContext } from './context';

import { Home, Detail, Login } from './pages';

function CustomRoute({ isAuth, isPrivate, ...rest }) {
    const { authenticated } = useContext(AuthContext);
    console.log('==authe', authenticated)

    if(isAuth && !authenticated){
        return <Redirect to='/home' />
    }

    // if(isPrivate && !authenticated) {
    //     return <Redirect to='/' />
    // }

    return <Route { ...rest} />
}


function Routes() {
  return (
      <Router>
          <Switch>
            <CustomRoute exact isPrivate path='/home'>
                <Home />
            </CustomRoute>
            <CustomRoute exact isPrivate path='/detail'>
                <Detail />
            </CustomRoute>
            <CustomRoute exact isAuth path='/'>
                <Login />
            </CustomRoute>
          </Switch>
      </Router>
  )
}

export default Routes;