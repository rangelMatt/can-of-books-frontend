import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class LoginForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      name: e.target.name.value,
      email: e.target.email.value
    }
    this.props.loginHandler(user);
  }

  render() {
    /* DONE: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="name">
          <Form.Control type="name" placeholder="Enter Name"></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control type="email" placeholder="Enter Email"></Form.Control>
        </Form.Group>
        <Button type="submit">SUBMIT</Button>
      </Form>
    );
  }
};

export default LoginForm;
