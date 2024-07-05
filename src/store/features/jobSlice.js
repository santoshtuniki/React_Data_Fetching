// module imports
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const jobSlice = createSlice({
    name: 'jobSlice',
    initialState,
    reducers: {
        setJobs: (state, action) => {
            state.value = action?.payload;
        }
    }
});

// action
export const { setJobs } = jobSlice.actions;

// reducer
export default jobSlice.reducer;