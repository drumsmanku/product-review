import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import isAdminReducer from './features/isAdminSlice';

const persistConfig = {
  key: 'root',
  storage,
  // Add any other configuration options as needed
};

const persistedReducer = persistReducer(persistConfig, isAdminReducer);

const store = configureStore({
  reducer: persistedReducer,
});

// Create persistor object for persisting Redux store
const persistor = persistStore(store);

export { store, persistor };
