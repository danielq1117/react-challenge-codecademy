import React from 'react';

import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString('en-US')
      .split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        placeholder="Appointment Title"
      />
      <ContactPicker
        contacts={contacts}
        value={contact}
        onChange={e => setContact(e.target.value)}
      />
      <input
        required
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        min={getTodayString()}
      />
      <input
        type="time"
        value={time}
        onChange={e => setTime(e.target.value)}
        required
      />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
