import { Component } from 'react';
import { Button } from 'react-bootstrap';
import LoginForm from './LoginForm';

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayButton: false,
    }
  }
  render() {

    /* DONE: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    return (
      <>
        {this.state.displayButton ?
          (<LoginForm loginHandler={this.props.loginHandler} />)
          :
          (<Button
            onClick={(e) => this.setState({ displayButton: true })}
          >Login</Button>)
        }
      </>
    )
  }
}
