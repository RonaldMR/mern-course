import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Landing, Alert, NavBar } from './components/Layout'
import { Login, Register } from './components/Auth'
import Dashboard from './components/Dashboard'
import Profiles from './components/Profiles'
import Profile from './components/Profile'
import Posts from './components/Posts'
import Post from './components/Post'
import { PrivateRoute } from './components/Routing'
import {
  CreateProfile,
  EditProfile,
  AddEducation,
  AddExperience
} from './components/ProfileForms'
import { Provider } from 'react-redux'
import store from './store'

import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

import './App.css'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              />
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />
              <PrivateRoute exact path="/posts" component={Posts} />
              <PrivateRoute exact path="/posts/:id" component={Post} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  )
}
export default App
