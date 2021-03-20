import { connect } from 'react-redux';

import { authSelectors, authOperations } from '../../redux';

import UserMenu from './UserMenu';

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
})

const mapDispatchToProps = {
  onClick: authOperations.logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);