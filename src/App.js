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
import Profile from './Profile';
import Login from './Login';

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
    return (
      <>
        <Router>
          <Header user={this.state.user} logoutHandler={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.state.user ?
                (<BestBooks user={this.state.user}/>) : (<Login loginHandler={this.loginHandler}/>)
              }
            </Route>
            {/* DONE: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route exact path="/Profile">
              <Profile user={this.state.user} />
              {/* DONE: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
