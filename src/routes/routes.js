import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/pages/Home'
import Dashboard from '../components/pages/Dashboard'
import SignUp from '../components/pages/SignUp'
import SignIn from '../components/pages/SignIn'
import SignOut from '../components/pages/SignOut'
import AuthenticatedRoute from './AuthenticatedRoute'

const Routes = ({ user, setUser, clearUser }) => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => <Home {...props} user={user} />}
    />
    <Route
      path="/sign-up"
      render={props => <SignUp {...props} setUser={setUser} />}
    />
    <Route
      path="/sign-in"
      render={props => <SignIn {...props} setUser={setUser} />}
    />
    <Route
      exact
      path="/sign-out"
      render={props => <SignOut {...props} clearUser={clearUser} user={user} />}
    />
    <AuthenticatedRoute
      exact
      path="/dashboard"
      user={user}
      render={props => <Dashboard {...props} user={user} />}
    />
  </Switch>
)

export default Routes