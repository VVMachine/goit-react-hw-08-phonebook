import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactReducers from "./contact/contactReducers";
import authReducer  from './auth/authReducer'


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};



export const store = configureStore({
  reducer: {
    contacts: contactReducers,
    auth: persistReducer(authPersistConfig, authReducer),
  }
})


export const persistor = persistStore(store);