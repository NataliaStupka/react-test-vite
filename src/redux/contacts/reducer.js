import { addContact, deleteContact, setStatusFilter } from './action'; //action
import dataContacts from '../../assets/contacts.json';
//початковий стан(дані)
const initialState = {
  contacts: {
    items: dataContacts,
  },
  filters: { name: '' },
};

//функція, як міняється цей стан, повертає новий
//приймає старий state, повертає новий
//state - те з чым працює, action - те що приходить(те що відправляє dispatch)
//----------------------------------------------------------
//Counter
//import contacts from '../../assets/contacts.json';

// //  Стан, завжди об'єкт,
// const initialContactState = {
//   contacts: {
//     items: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//       { id: 'id-5', name: 'Nataliia Stupka', number: '067-455-91-42' },
//     ],
//   },
// };
console.log('InitialContacts:', initialState.contacts.items);

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addContact.type: {
      console.dir(addContact.type); //тип
      console.log('payload add:', action.payload); //dispatch(addContact(як аргумент payload))
      // поверне копію об'єкту поточного стану в якому є всі дані існуючого стану
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };
    }

    case deleteContact.type: {
      console.dir(deleteContact.type); //тип
      console.log('payload delete:', action.payload);
      // поверне копію об'єкту поточного стану в якому є всі дані існуючого стану
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            contact => contact.id !== action.payload
          ),
        },
      };
    }

    // ???? НЕ фільтрує ???
    case setStatusFilter.type: {
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(contact => {
            contact.name.toLowerCase().includes(action.payload.toLowerCase());
          }),
        },
      };
    }

    default:
      return state;
  }
};
