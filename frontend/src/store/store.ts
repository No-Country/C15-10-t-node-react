import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import authReducer from "../layouts/auth/reducers/authSlice"


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};


const rootReducer = combineReducers({
    auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewareConfig = {
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
};

/**
 * Configuración de la store de estados globales de la aplicación.
 */
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(middlewareConfig),
});


export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch