import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import AUTHENTICATED_USER from '../tags/auth';

const dummyApi = createApi({
  reducerPath: 'dummyApi',
  tagTypes: [AUTHENTICATED_USER],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
  }),
  endpoints: () => ({}),
});

export default dummyApi;
