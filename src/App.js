import { Redirect, Route, Switch } from 'react-router-dom';
import { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from "react-transition-group";

import { authOperations, authSelectors, globalDataSelectors } from './redux';

import routes from './routes';
import { PrivatRoute, PublicRoute } from './components/Routes';

import { AppBar, LoaderSpinner, Notification } from './components';

import { Container } from './App.css';

const PhoneBookView = lazy(() => import('./views/PhoneBookView'));
const LoginView = lazy(() => import('./views/LoginView'));
const RegistrationView = lazy(() => import('./views/RegistrationView'));
const HomeView = lazy(() => import('./views/HomeView'));

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }
  
  render() {
    const { isAuthenticated, errorText } = this.props;

    return (
      <Container>
        <AppBar />
        <CSSTransition
					in={!!errorText}
					appear={true}
					classNames="fade"
					timeout={250}
					unmountOnExit
				>					
					<Notification />
				</CSSTransition>
        
        <Suspense fallback={<LoaderSpinner />}>
          <Switch>
            <Route path={routes.home} exact component={HomeView} />

            <PublicRoute
              path={routes.registration} exact
              isAuthenticated={isAuthenticated}
              component={RegistrationView}
              redirectTo={routes.contacts}
            />
            <PublicRoute
              path={routes.login} exact
              isAuthenticated={isAuthenticated}
              component={LoginView}
              redirectTo={routes.contacts}
            />
            <PrivatRoute
              path={routes.contacts} exact
              component={PhoneBookView}
              isAuthenticated={isAuthenticated}
              redirectTo={routes.login}
            />
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
  errorText: globalDataSelectors.getErrorText(state),
})

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
