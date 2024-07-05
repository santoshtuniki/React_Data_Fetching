// module imports
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// util imports
import { DATA_URL } from '../../utils/constants';

export const jobApi = createApi({
    reducerPath: 'jobApi',
    baseQuery: fetchBaseQuery({ baseUrl: DATA_URL }),
    tagTypes: ['Jobs'],
    endpoints: (builder) => ({
        getJobs: builder.query({
            query: () => `/kpav-sd4t.json`,
            providesTags: ['Jobs'],
        }),
    }),
})

export const { useGetJobsQuery } = jobApi;
