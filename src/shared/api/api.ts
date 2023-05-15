// import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
// import { RootState } from 'app/providers/StoreProvider';

export const api = () => ({
  baseUrl: 'https://my-corner-server.vercel.app'
});

// prepareHeaders: (headers, { getState }) => {
//   const token = (getState() as RootState).user.authData.id;

//   if (token) {
//     headers.set('authorization', `Bearer ${token}`);
//   }

//   return headers;
// }
