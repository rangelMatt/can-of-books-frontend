import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks';
// import Profile from './Profile';
import AuthProfile from './AuthProfile'
import Login from './Login';
import { withAuth0 } from '@auth0/auth0-react'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  loginHandler = (user) => {
    console.log(user)
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    console.log('something')
    this.setState({
      user: null,
    })
  }

  render() {
    console.log(this.props.auth0.user)
    return (
      <>
        <Router>
          <Header user={this.state.user} logoutHandler={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ?
                (<BestBooks user={this.state.user}/>) : (<Login loginHandler={this.loginHandler}/>)
              }
            </Route>
            {/* DONE: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route exact path="/Profile">
              <AuthProfile />
              {/* DONE: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
