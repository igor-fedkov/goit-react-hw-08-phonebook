import { connect } from 'react-redux';

import { authOperations } from '../../redux';

import LoginView from './LoginView';

const mapDispatchToProps = {
  onSubmitForm: authOperations.logIn,
}

export default connect(null, mapDispatchToProps)(LoginView);