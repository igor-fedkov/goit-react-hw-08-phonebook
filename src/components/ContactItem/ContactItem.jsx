import PropTypes from 'prop-types';

import { ButtonDelete, Li, Name, Number, NameAndBtnContainer } from './ContactItem.css';

const ContactItem = ({ id, name, number, deleteContact, setEditContactId }) => {

	return (
		<Li onDoubleClick={() => setEditContactId(id)}>
			<Name>{name}:</Name>
			<NameAndBtnContainer>
				<Number>{number}</Number> 
				<ButtonDelete
					type="button"
					onClick={() => deleteContact(id)}>
					&#x2716;
				</ButtonDelete>
			</NameAndBtnContainer>
		</Li>		
	)
}

ContactItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.string,
	deleteContact: PropTypes.func
}

export default ContactItem;