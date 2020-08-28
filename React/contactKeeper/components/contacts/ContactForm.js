import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  useEffect(() => {
    if (contactContext.current !== null) {
      setContact(contactContext.current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [contactContext]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (contactContext.current === null) {
      contactContext.addContact(contact);
    } else {
      contactContext.updateContact(contact);
    }
    clearAll();
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    });
    console.log(contact);
  };

  const clearAll = () => {
    contactContext.clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {contactContext.current ? 'Edit Contact' : 'Add Contact'}{' '}
      </h2>
      <input
        type="text"
        onChange={onChange}
        placeholder="Name"
        name="name"
        value={name}
      />
      <input
        type="email"
        onChange={onChange}
        placeholder="Email"
        name="email"
        value={email}
      />
      <input
        type="text"
        onChange={onChange}
        placeholder="Phone"
        name="phone"
        value={phone}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional{' '}
      <div>
        <input
          type="submit"
          value={contactContext.current ? 'Update Contact' : 'Add Contact'}
          className="btn btn-primary btn-block"
        />
      </div>
      {contactContext.current && (
        <div>
          <button onClick={clearAll} className="btn btn-ligth btn-block">
            Clear Field
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
