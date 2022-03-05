import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
// import LogoutButton from './LogoutButton';
import AuthLogout from './AuthLogout'
import { withAuth0 } from '@auth0/auth0-react'


class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        {this.props.auth0.isAuthenticated ?
          (<>
          <NavItem><Link to="/Profile" className="nav-link">Profile</Link></NavItem> 
          <NavItem><AuthLogout /></NavItem>
          </>) : 
          null
        }
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {/* DONE: if the user is logged in, render a navigation link to profile page */}
        {/* DONE: if the user is logged in, render the `LogoutButton` */}
      </Navbar>
    )
  }
}

export default withAuth0(Header);
