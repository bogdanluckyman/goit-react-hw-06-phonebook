import { useEffect } from 'react';
import { GlobalStyle } from './GlobalStyled';
import { ContactForm } from './Form/Form';
import { ContactList } from './ContactList';
import { SearchBar } from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('newContact', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const { name, number } = newContact;

    if (!name || !number) {
      alert('Please fill in both name and number fields.');
      return;
    }
    const contactExists = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (contactExists) {
      alert('Contact with this name or number already exists.');
      return;
    }
    dispatch(add(newContact));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <SearchBar />
      {contacts.length > 0 && <ContactList />}
      <GlobalStyle />
    </div>
  );
};
