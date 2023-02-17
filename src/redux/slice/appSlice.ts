import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { fetchData } from "./actions";

interface DataState {
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  loading: false,
  error: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchData.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(fetchData.fulfilled, (state, action: PayloadAction<Data>) => {
    //     state.data = action.payload;
    //     state.loading = false;
    //     state.error = null;
    //   })
    //   .addCase(fetchData.rejected, (state, action) => {
    //     state.data = null;
    //     state.loading = false;
    //     state.error = action.error.message || "Unknown error";
    //   });
  },
});

export default appSlice.reducer;
