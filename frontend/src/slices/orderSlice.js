import { apiSlice } from './apiSlice';
import { ORDER_URL } from '../constants';

export const orderSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      createOrder: builder.mutation({
        query: (order) => ({
          url: ORDER_URL,
          method: 'POST',
          body: {...order},
        }),
      }),
      getOrderDetails: builder.query({
        query: (orderId) => ({
          url: `${ORDER_URL}/${orderId}`
        }),
        keepUnusedDataFor: 5
      })
    }),
});

export const { useCreateOrderMutation, useGetOrderDetailsQuery } = orderSlice;
