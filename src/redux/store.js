import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/reducer'; //контакти

//підключаємо contacts
//configureStore - каже з яких частин складається 'склад'
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
//для створення store викор. функ. configureStore(options),
// store передаємо властивість reducer
