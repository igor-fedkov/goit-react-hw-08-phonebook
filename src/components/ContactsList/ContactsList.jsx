import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from "react-transition-group"; 

import ContactItem from '../ContactItem';

import { List } from './ContactsList.css';

const ContactsList = ({ filteredContacts }) => {

	const listItems = filteredContacts.map(({ name, number, id }) => {
		return (
			<CSSTransition
				key={id}
				timeout={250}
				classNames="fade"
				unmountOnExit
			>
				<ContactItem
					id={id}
					name={name}
					number={number}					
				/>
			</CSSTransition>
		)
	})

	return (
		
		<List>
			<TransitionGroup>
				{listItems}
			</TransitionGroup>
		</List>
	)
}

ContactsList.propTypes = {
	filteredContacts: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		number: PropTypes.string.isRequired
	}))
}

export default ContactsList;