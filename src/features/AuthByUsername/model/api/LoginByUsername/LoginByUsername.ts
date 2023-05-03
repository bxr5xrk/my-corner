import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginRes, LoginSchema } from '../../types/loginSchema';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://my-corner-server.vercel.app' }),
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
