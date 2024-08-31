import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://car-wash-booking-systam-backend-a-5.vercel.app/api",
  }),
  tagTypes:["Service", "Slot", "User", "Review"],
  endpoints: () => ({}),
});