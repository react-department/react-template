import dummyApi from '../../../apis/dummy';
import AUTHENTICATED_USER from '../../../tags/auth';

import type IAuthRequest from '../interfaces/IAuthRequest';
import type IAuthResponse from '../interfaces/IAuthResponse';

const dummyAuthApi = dummyApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IAuthResponse, Partial<IAuthRequest>>({
      invalidatesTags: [AUTHENTICATED_USER],
      query: (user) => ({
        url: '/auth/login',
        method: 'POST',
        body: user,
      }),
    }),
    fetchUser: builder.query<IAuthResponse, IAuthResponse['id']>({
      providesTags: [AUTHENTICATED_USER],
      query: (id) => ({
        url: `/users/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginMutation, useFetchUserQuery } = dummyAuthApi;

export default dummyAuthApi;
