import { connect } from 'react-redux';

import { phoneBookSelectors } from '../../redux';

import ContactsList from './ContactsList';

const mapStateToProps = state => phoneBookSelectors.getFilteredContacts(state);

export default connect(mapStateToProps)(ContactsList);