import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';

import s from './ContactList.module.css';
//import PropTypes from "prop-types";

const ContactList = () => {
  //                       повинно бути  state.contacts.items (але щось не зовсім коректно ввела у initialState) ???
  const contacts = useSelector(state => state.contacts.contacts.items);
  console.log('useSelctor:', contacts);

  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.item}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

// ContactList.prototype = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };

export default ContactList;
