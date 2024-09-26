import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';  // Fixed the typo

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,  // Fixed middleware option to 'serializableCheck'
    }),
});
