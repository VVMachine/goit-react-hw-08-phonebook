import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../../redux/auth/authOperations";

import styles from "./Register.module.css";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h3 className={styles.title}>Sign Up new user</h3>
        <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            <p className={styles.fieldName}>Name:</p>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </label>
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
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(Register);
