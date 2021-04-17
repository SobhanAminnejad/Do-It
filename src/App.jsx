/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import withSplashScreen from './components/splashScreen/WithSplashScreen';
import Routes from './components/router/Routes';
import ProtectedRoute from './components/router/PrivateRoute';

const App = () => (
  <Switch>
    {/* <Login /> */}
    {Routes.map((item) => {
      const properties = {
        exact: item ? item.exact : false,
        path: item.path,
        name: item.name,
        render: () => <item.component />,
        key: item.name,
      };
      return item.protected ? (
        <ProtectedRoute {...properties} isLoggedIn={false} />
      ) : (
        // <div>he is not logged in</div>
        <Route {...properties} />
      );
    })}
  </Switch>
);

export default withRouter(withSplashScreen(App));
