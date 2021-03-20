import { connect } from 'react-redux';

import { phoneBookActions, phoneBookOperations } from '../../redux';

import ContactItem from './ContactItem';

const mapDispatchToProps = (dispatch) => ({
	deleteContact: id => dispatch(phoneBookOperations.deleteContact(id)),
	setEditContactId: id => dispatch(phoneBookActions.setEditContactId(id)),
})

export default connect(null, mapDispatchToProps)(ContactItem);