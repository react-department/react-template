import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const jokesApi = createApi({
  reducerPath: 'jokesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_JOKES,
  }),
  endpoints: () => ({}),
});

export default jokesApi;
