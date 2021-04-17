import React from 'react';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import PropTypes from 'prop-types';

const PrivateRoute = ({
  isLoggedIn, path, name, location, exact,
}) => (isLoggedIn ? (
  <Route
    {...{
      path,
      name,
      location,
      exact,
    }}
  />
) : (
  <Redirect to={`/login?next=${location.pathname + location.search}`} />
));

PrivateRoute.defaultProps = {
  isLoggedIn: false,
};
PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.bool,
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.shape.isRequired,
  exact: PropTypes.bool.isRequired,
};

export default PrivateRoute;
