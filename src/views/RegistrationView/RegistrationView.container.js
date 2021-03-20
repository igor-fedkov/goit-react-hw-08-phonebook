import { connect } from 'react-redux';

import { authOperations }from '../../redux';

import RegistrationView from './RegistrationView';

const mapDispatchToProps = {
  onSubmitForm: authOperations.register,
}

export default connect(null, mapDispatchToProps)(RegistrationView);