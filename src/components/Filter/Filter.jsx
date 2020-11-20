import React from "react";
import PropTypes from "prop-types";

import styles from './Filter.module.css'


export default function Filter({ filterHandler }) {
  return (
    <>
      <p className={styles.fieldName}>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        placeholder="Input name"
        name="filter"
        onChange={filterHandler}
      />
    </>
  );
}

Filter.defaultProps = {
  filterHandler: () => {
    return;
  },
}

Filter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
}