import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import cartSliceReducer  from "./slices/cartSlice";
import authSliceReducer from "./slices/authSlice";
const store = configureStore(
    {
        reducer: {
            [apiSlice.reducerPath]:apiSlice.reducer,
            cart:cartSliceReducer,
            login:authSliceReducer,
            
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;