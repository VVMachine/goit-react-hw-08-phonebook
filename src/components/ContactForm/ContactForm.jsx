import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import contactOperations from "../../redux/contact/contactOperations";

import contactSelectors from "../../redux/contact/contactSelectors";

class ContactForm extends Component {
  static defaultProps = {
    onAddButton: () => {
      return;
    },
  };

  static propTypes = {
    onAddButton: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  clearInput = (e) => {
    e.target.value = "";
  };

  inputHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  addButtonHandler = (e) => {
    const { name, number } = this.state;

    e.preventDefault();

    const isInContacts = this.props.contacts.some(
      (contact) => contact.name === name
    );

    if (isInContacts) {
      this.props.onOpenNotification();
      return;
    }

    this.props.onAddContact({ name, number });

    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.addButtonHandler}>
        <div className={styles.container}>
          <div className={styles.input}>
            <div>
              <span className={styles.fieldName}>Name: </span>
              <input
                className={styles.input}
                type="text"
                placeholder="Name"
                name="name"
                onChange={this.inputHandler}
                onClick={this.clearInput}
              />
            </div>
            <div>
              <span className={styles.fieldName}>Phone: </span>
              <input
                className={styles.input}
                type="tel"
                placeholder="Number (XXX-XX-XX)"
                name="number"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                onChange={this.inputHandler}
                onClick={this.clearInput}
              />
            </div>
          </div>
          <div className={styles.btnContainer}>
            <button type="submit" className={styles.button}>
              Add Contact
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAddContact: contactOperations.addContact,
};

const mapStateToProps = (state) => ({
  contacts: contactSelectors.getFitredContactItems(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
