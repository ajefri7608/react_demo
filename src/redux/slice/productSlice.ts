import { fakeProductResponse } from "./../../view/productSearch/fakeData";
import { ProductData } from "./../../model/product";
import { PayloadAction } from "./../../../node_modules/@reduxjs/toolkit/src/createAction";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios, { AxiosPromise, AxiosResponse } from "axios";

import { ProductState, SearchPrductParam } from "model/product";

const initialState: ProductState = {
  filteredProductData: fakeProductResponse.data,
  productData: fakeProductResponse.data,
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    searchProduct: (state, action: PayloadAction<SearchPrductParam>) => {
      state.filteredProductData = state.productData;
      if (state.productData !== undefined) {
        const tmp: ProductData[] = [];
        state.productData.map((item) => {
          let isResult = true;
          if (action.payload.text !== undefined) {
            if (
              !item.name
                .toLowerCase()
                .includes(action.payload.text.toLowerCase())
            ) {
              isResult = false;
            }
          }
          if (action.payload.switchBtn !== undefined) {
            if (action.payload.switchBtn && item.used === false) {
              isResult = false;
            }
          }
          if (isResult) {
            tmp.push(item);
          }
        });
        state.filteredProductData = tmp;
      }
    },
  },
  extraReducers: (builder) => {},
});
export const { searchProduct } = productSlice.actions;

export default productSlice.reducer;
