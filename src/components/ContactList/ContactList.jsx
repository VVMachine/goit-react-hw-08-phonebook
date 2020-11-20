import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import slideTransition from "../../CSSTransitions/slide.module.css";

import { connect } from "react-redux";

import contactOperations from "../../redux/contact/contactOperations";
import contactSelectors from "../../redux/contact/contactSelectors";

function ContactList({ contactsList, onRemoveContact }) {
  return (
    <div className={styles.container}>
      <TransitionGroup component="ul" className={styles.list}>
        {contactsList.length > 0 &&
          contactsList.map(({ id, name, number }) => (
            <CSSTransition
              key={id}
              timeout={250}
              unmountOnExit
              classNames={slideTransition}
            >
              <li key={id} className={styles.listItem}>
                <button
                  className={styles.button}
                  type="button"
                  onClick={() => onRemoveContact(id)}
                >
                  Delete
                </button>
                {name}: {number}
              </li>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
}

ContactList.defaultProps = {
  contactsList: [],
  deleteHandler: () => {
    return;
  },
};


ContactList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

const mapDispatchToProps = {
  onRemoveContact: contactOperations.removeContact,
};

const mapStateToProps = (state) => ({
  contactsList: contactSelectors.getFitredContactItems(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
