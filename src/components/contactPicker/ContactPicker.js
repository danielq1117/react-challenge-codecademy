import React from 'react';

export const ContactPicker = ({ contacts, contact, onChange }) => {
  return (
    <select onChange={onChange} defaultValue="" value={contact}>
      <option key="default" value="">
        Select a Contact
      </option>
      {contacts.map(contact => (
        <option key={contact.name} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};
