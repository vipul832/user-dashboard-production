import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { USERS } from "../constant/userDataContant";
const Environment = import.meta.env;

export const userDataApi = createApi({
  reducerPath: "userDataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: Environment.VITE_APP_BACKEND_BASE_URL,
  }),
  endpoints: (builder) => ({
    getUserData: builder.query<USERS, number>({
      query: (page) => `/users/p?limit=10&page=${page}`,
    }),
  }),
});

export const { useGetUserDataQuery } = userDataApi;
