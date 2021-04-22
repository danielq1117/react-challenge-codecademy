import React from 'react';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        required
        placeholder="Contact Name"
      />
      <input
        type="tel"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        required
        placeholder="Contact Phone (###-###-####)"
      />
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        placeholder="Contact Email"
      />
      <input type="submit" value="Add Contact" />
    </form>
  );
};
