import { Component } from "react";

class Profile extends Component {

  render() {
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */
    return (<>
      {
        this.props.user ?
          (<p>{this.props.user.name}: {this.props.user.email}</p>) :
          null
      }</>)
  };
}

export default Profile;
