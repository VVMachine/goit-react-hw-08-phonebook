import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import ContactList from "../../components/ContactList/ContactList";

import Logo from "../../components/Logo/Logo";
import Notification from "../../components/Notification/Notification";

import LogoSlideTransition from "../../CSSTransitions/slideLogo.module.css";
import PopTransition from "../../CSSTransitions/pop.module.css";

import { connect } from "react-redux";

import contactActions from "../../redux/contact/contactActions";
import contactOperations from "../../redux/contact/contactOperations";

import styles from './Contacts.module.css'

class Contacts extends Component {
  state = {
    didMount: false,
    contactExists: false,
  };

  componentDidMount() {
    this.setState({ didMount: true });
    this.props.getSavedContacts();
  }

  handleOpenNotification = () => {
    this.setState(
      (prevState) => ({
        contactExists: !prevState.contactExists,
      }),
      () =>
        setTimeout(() => {
          this.setState((prevState) => ({
            contactExists: !prevState.contactExists,
          }));
        }, 1000)
    );
  };

  filterHandler = (e) => {
    this.props.onChangeFilter(e.target.value);
  };

  render() {
    const { didMount, contactExists } = this.state;

    return (
      <>
        <div className="App">
          <CSSTransition
            in={didMount}
            timeout={500}
            classNames={LogoSlideTransition}
            appear
          >
            <Logo />
          </CSSTransition>

          <ContactForm onOpenNotification={this.handleOpenNotification} />

          <h3 className={styles.contactList}>Contacts list</h3>

          <Filter filterHandler={this.filterHandler} />
          <ContactList />
        </div>

        <CSSTransition
          in={contactExists}
          timeout={250}
          unmountOnExit
          classNames={PopTransition}
        >
          <Notification />
        </CSSTransition>
      </>
    );
  }
}

const mapDispatchToProps = {
  onChangeFilter: contactActions.filter,
  getSavedContacts: contactOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(Contacts);
