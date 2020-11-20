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
      <div className={styles.container}>
        <h3 className={styles.title}>Sign In</h3>
        <div>
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
            <p class={styles.fieldName}>Password:</p>
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
          <div className={styles.btnContainer}>
          <button type="submit" className={styles.button}>
            Login
          </button>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default connect(null, {onLogin: authOperations.logIn})(Login);
