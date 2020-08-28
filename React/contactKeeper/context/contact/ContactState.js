import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Juan',
        email: 'juan@gmail.com',
        phone: '123123123',
        type: 'professional',
      },
      {
        id: 2,
        name: 'Maria',
        email: 'maria@gmail.com',
        phone: '123143123',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Carlos',
        email: 'carlos@gmail.com',
        phone: '133123123',
        type: 'personal',
      },
    ],
    current: null,
    filtered: null,
    text: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  const addContact = (contact) => {
    contact.id = uuidv4();

    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  // Delete

  const deleteContact = (id) => {
    const updatedContacts = state.contacts.filter(
      (contact) => contact.id !== id
    );

    dispatch({
      type: DELETE_CONTACT,
      payload: { id, updatedContacts },
    });

    if (state.text !== null) {
      dispatch({
        type: FILTER_CONTACTS,
        payload: state.text,
      });
    }
  };

  //Set Current Contact

  const setCurrent = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact,
    });
  };

  // Clear Current Contact

  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  // Update Contact

  const updateContact = (contact) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    });

    if (state.text !== null) {
      dispatch({
        type: FILTER_CONTACTS,
        payload: state.text,
      });
    }
  };

  //Filter Contacts

  const filterContacts = (text) => {
    state.text = text;
    dispatch({
      type: FILTER_CONTACTS,
      payload: text,
    });
  };

  // Clear Filter

  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
