//components
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';

// import { Counter } from './Counter/Counter';

export const App = () => {
  return (
    <div>
      {/* <Counter /> */}

      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

// <ContactForm onAdd={addContact} />
// <SearchBox value={filter} onFilter={setFilter} />
// <ContactList contacts={visibleContacts} onDelete={deleteContact} />
