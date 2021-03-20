import { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from "react-transition-group";

import fieldsForNewContactForm from './new-contact-fields';

import {
	InputForm,
	ContactsList,
	Filter,
	LoaderSpinner,
	Modal
} from '../../components';

import { PhoneBookEl, Title } from './PhoneBookView.css';

class PhoneBookView extends Component {
	
	static propTypes = {
		showNotification: PropTypes.bool
	}

	state = {
		isModalShow: false,
	}

	componentDidMount() {
		this.props.getContacts();
	}

	onSubmitAddContact = (contact) => {
		const { name } = contact;
		const { contacts, addContact, createErrorText } = this.props;

		const isNameAlreadyExists = contacts.find(contact => contact.name === name);
		if (isNameAlreadyExists !== undefined) {
			createErrorText('Такой контакт уже существует');
      return;
		}
		addContact(contact);	

		return true;
	}

	onSubmitEditContact = (contact) => {
		const { name, number } = contact;
		const {
			contacts,
			idForEdit,
			editName,
			editNumber,
			editContact,
			setEditContactId,
			createErrorText
		} = this.props;

		if (name === editName && number === editNumber) {
			setEditContactId(null);
			return;
		}

		const isNameAlreadyExists = contacts.find(contact =>
			contact.name === name && contact.id !== idForEdit
		);
		if (isNameAlreadyExists !== undefined) {
			createErrorText('Такой контакт уже существует');
      return;
		}
		editContact(idForEdit, contact);

		return true;
	}

	onCloseEditModal = () => {
		const { setEditContactId } = this.props;

		setEditContactId(null);
	}

	render() {
		const { contacts, loading, idForEdit, editName, editNumber } = this.props;
		const timeout = 250;

		return (
			<PhoneBookEl>
				<CSSTransition
					in={true}
					appear={true}
					classNames="fade"
					timeout={timeout}>
					
						<Title>Телефонная книга</Title>
				</CSSTransition>

				<InputForm
					btnCaption='Add contact'
					fields={fieldsForNewContactForm}
					onSubmitForm={this.onSubmitAddContact}
				/>

				<CSSTransition
					in={contacts.length > 1}
					appear={true}
					classNames="fade"
					timeout={timeout}
					unmountOnExit>
					
					<Filter />
				</CSSTransition>
				
				{
					loading && !idForEdit && <LoaderSpinner />
				}
				
				<ContactsList />

				{
					idForEdit &&
					<Modal onClose={this.onCloseEditModal}>
						<InputForm
							btnCaption='Edit contact'
							fields={
								[
									{
										label: 'Name',
										type: 'text',
										name: 'name',
										startValue: editName,
									},
									{
										label: 'Number',
										type: 'tel',
										name: 'number',
										startValue: editNumber,
									},
								]
							}
							onSubmitForm={this.onSubmitEditContact}
						/>						
						{
							loading && <LoaderSpinner />
						}						
					</Modal>
				}
				
			</PhoneBookEl>
		);
	}
}

export default PhoneBookView;