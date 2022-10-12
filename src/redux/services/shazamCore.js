import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '8b849b5449mshc85cb243b80d8efp14cb47jsn8c618332db23');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getChartList: builder.query({ query: () => '/charts/world'}),
    }),
});

export const {
    useGetChartListQuery,
} = shazamCoreApi;

