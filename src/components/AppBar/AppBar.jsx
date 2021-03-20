import { Navigation, AuthNav, UserMenu } from '../';

import { Header } from './AppBar.css';

const AppBar = ({ isAuthenticated }) => {
  return (
    <Header>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </Header>
  )
}

export default AppBar;