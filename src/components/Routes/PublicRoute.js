import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated ?
        <Redirect to={redirectTo} /> :
        <Component {...props} />
    }
  />
);

export default PublicRoute;