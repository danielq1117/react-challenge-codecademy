import React, { useState, useEffect } from 'react';

import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [nameRepeated, setNameRepeated] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (name && !nameRepeated) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  useEffect(() => {
    if (contacts.find(contact => contact.name === name)) {
      setNameRepeated(true);
    } else {
      setNameRepeated(false);
    }
  }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>
          Add Contact
          {nameRepeated ? ' < Name already exists' : ''}
        </h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
