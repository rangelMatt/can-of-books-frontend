import { Component } from "react";

class LogoutButton extends Component {

  render() {
    return (
      <button onClick={this.props.logoutHandler}>
        Log Out
      </button>
    );
  }
};

export default LogoutButton;
