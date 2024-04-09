import jokesApi from '../../../apis/jokes';

import type IJokeResponse from '../interfaces/IJokeResponse';

const randomJokesApi = jokesApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchJoke: builder.query<IJokeResponse, void>({
      query: () => ({
        url: '/random',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
});

const { useFetchJokeQuery } = randomJokesApi;

export default useFetchJokeQuery;
