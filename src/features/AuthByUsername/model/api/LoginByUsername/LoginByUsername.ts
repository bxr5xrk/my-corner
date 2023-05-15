import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api } from 'shared/api/api';
import { LoginRes, LoginSchema } from '../../types/loginSchema';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery(api()),
  endpoints: (builder) => ({
    login: builder.mutation<LoginRes, LoginSchema>({
      query: ({ username, password }) => ({
        url: 'login',
        method: 'POST',
        body: {
          password,
          username
        }
      })
    })
  })
});

export const { useLoginMutation: useLogin } = authApi;
