import React from 'react';
import { connect } from 'react-redux';

import authSelectors from '../../redux/auth/authSelectors'
import authOperations from '../../redux/auth/authOperations'

import styles from './UserMenu.module.css';

function UserMenu({onLogout, name}) {
    return (
        <div className={styles.container}>
        <span className={styles.welcomeTitle}>Welcome, {name}</span>
        
        <button type="button" onClick={onLogout} className={styles.button}>
          Logout
        </button>
      </div>
    )
}


const mapStateToProps = state => ({
    name: authSelectors.getUserName(state),
  });


export default connect(mapStateToProps, {onLogout: authOperations.logOut})(UserMenu);