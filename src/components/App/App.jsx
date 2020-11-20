import React, { Component, Suspense } from "react";
import { connect } from "react-redux";

import { Switch } from "react-router-dom";

import authSelectors from "../../redux/auth/authSelectors";
import authOperations from "../../redux/auth/authOperations";

import UserMenu from "../UserMenu/UserMenu";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import routes from "../../routes";

import styles from "./App.module.css";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div className="App">
        <div className={styles.container}>
          {!this.props.isAuthenticated && (
            <Link to="/" exact className="linkHome">
              <FontAwesomeIcon icon={faHome} size="3x" color="#304a63" />
            </Link>
          )}

          {this.props.isAuthenticated && <UserMenu />}

          <Suspense fallback={`Loading.........`}>
            <Switch>
              {routes.map((route) =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute key={route.label} {...route} />
                )
              )}
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
