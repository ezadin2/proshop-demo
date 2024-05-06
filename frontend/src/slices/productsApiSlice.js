import { PRODUCT_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url:PRODUCT_URL,
            }),
        keepUnusedDataFor :5
            }),
            getProductDetails: builder.query({
                query: (id) => ({
                    url:`${PRODUCT_URL}/${id}`,
                }),
                keepUnusedDataFor :5
            })
        }), 

});

export const {useGetProductsQuery,useGetProductDetailsQuery} = productApiSlice;