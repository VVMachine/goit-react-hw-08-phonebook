import React, { Component } from "react";
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/authOperations'; 

import styles from './Login.module.css';

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin({...this.state})

    this.setState({ email: "", password: "" });
  
  };

  render() {
    const {  email, password } = this.state;

    return (
      <div>
        <h3 className={styles.title}>Sign In</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
          <label>
            <p className={styles.fieldName}>Email:</p>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            <p className={styles.fieldName}>Password:</p>
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
            />
          </label>
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, {onLogin: authOperations.logIn})(Login);
