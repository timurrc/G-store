import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../interface/type";

export const productApi = createApi({
  reducerPath: "api/products/",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], number>({
      query: (limit) => `products?limit=${limit}`,
    }),
    getProductsJewelery: build.query<IProduct[], any>({
      query: () => `products/category/jewelery`,
    }),
    getProductsElectronic: build.query<IProduct[], any>({
      query: () => `products/category/electronics`,
    }),
    getProductMans: build.query<IProduct[], any>({
      query: () => `products/category/men's%20clothing`,
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetProductsJeweleryQuery,
  useGetProductsElectronicQuery,
  useGetProductMansQuery,
} = productApi;
