import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getEditContactId = state => state.contacts.idForEdit;

const getFilteredContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  if (contacts.length < 2) {
    return {
      filteredContacts: contacts
    };
  }

  const filteredContacts = contacts.filter(({ name }) =>
		name.toLowerCase().includes(filter.toLowerCase()));
	return {
		filteredContacts
	};
})

const getEditContact = createSelector([getContacts, getEditContactId], (contacts, id) => 
  contacts.find(contact => contact.id === id)
)

const phonebookSelectors = {
  getContacts,
  getLoading,
  getEditContactId,
  getFilter,
  getFilteredContacts,
  getEditContact
}

export default phonebookSelectors;