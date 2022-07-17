import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import Error404 from './Error404'
import SignUpForm from './users/SignUpForm.js'
import LoginForm from './users/LoginForm.js'
import CurrentUserProvider from './contexts/CurrentUser.js'
import Navigation from './Navigation'


function App() {
  return (
    <CurrentUserProvider>
    <BrowserRouter>
    <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign-up" component={SignUpForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route path="/" component={Error404} />
      </Switch>
      </BrowserRouter>
    </CurrentUserProvider>
    
  );
}

export default App;
