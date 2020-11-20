import React from "react";
import { Link } from "react-router-dom";

import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PHONEBOOK HOMEPAGE</h1>

    <div className={styles.linkContainter}>
      <span>
        <Link to="/login" exact className={styles.link}>
          Sign In
        </Link>
      </span>

      <span className={styles.text}> or </span>

      <span>
        <Link to="/register" exact className={styles.link}>
          Sign Up
        </Link>
      </span>
      </div>
    </div>
  );
}

export default HomePage;
