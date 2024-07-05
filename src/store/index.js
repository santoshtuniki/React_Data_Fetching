// module imports
import { configureStore } from '@reduxjs/toolkit';

// component imports
import jobReducer from './features/jobSlice.js';
import { jobApi } from './services/jobApi.js';

export const store = configureStore({
    reducer: {
        jobs: jobReducer,
        [jobApi.reducerPath]: jobApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(jobApi.middleware),
});
