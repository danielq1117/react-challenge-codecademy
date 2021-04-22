import React, { useState } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';
import { ContactsPage } from './containers/contactsPage/ContactsPage';

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: '/contacts',
    APPOINTMENTS: '/appointments'
  };

  const addContact = (name, phone, email) => {
    const newContact = {
      name,
      phone,
      email
    };
    setContacts(prev => [newContact, ...prev]);
  };

  const addAppointment = (title, contact, date, time) => {
    const newAppointment = {
      title,
      contact,
      date,
      time
    };
    setAppointments(prev => [newAppointment, ...prev]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
              appointments={appointments}
              contacts={contacts}
              addAppointment={addAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
