import { withRouter } from 'react-router-dom';

import routes from '../../routes';

import {StyledNavLink, NavigationEl} from './Navigation.css';

const Navigation = ({isAuthenticated}) => {
  return (
    <NavigationEl>
      <StyledNavLink to={routes.home} exact>
        Главная
      </StyledNavLink>

      {isAuthenticated && <StyledNavLink to={routes.contacts} exact>
        Телефонная книга
      </StyledNavLink>}
    </NavigationEl>
  )
}

export default withRouter(Navigation);