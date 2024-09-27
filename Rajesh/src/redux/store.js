import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice.js'
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';

// Combine reducers
const rootReducer = combineReducers({ user: userReducer });

// Persist configuration
const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer and middleware
export const store = configureStore({
    reducer: persistedReducer, // Fix the typo here
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Correct serializable option
        }),
});

export const persistor = persistStore(store);
