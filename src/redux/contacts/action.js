// export const addContact = () => {
//   return { type: 'addContact' };
// };

//export const addContact = newContact => {
// return {
//      type: 'contacts/addContact'
//      payload: newContact
// };
// };

import { createAction } from '@reduxjs/toolkit';

//Contacts
export const addContact = createAction('addContact'); //'contacts/addContact'
export const deleteContact = createAction('deleteContact');
export const setStatusFilter = createAction('setStatusFilter');

console.log('addContact', addContact());

// console.log(increment());
// console.log(changeStep('для пошуку'));
// console.log(changeStep());
// console.log(changeStep(5));
// console.log(changeStep([1, 2, 3]));
