
import { createSlice } from "@reduxjs/toolkit"
import { fetchCategories } from "../actions/category.action" 

const categorySlice = createSlice({
      name: "category",
      initialState: {
        list: [],
        loadingpl: false,

      },
    //   reducers: {},
      extraReducers: (builder) => {
        builder
          .addCase(fetchCategories.pending, (state) => {
            state.loadingpl = true;
          })
          .addCase(fetchCategories.fulfilled, (state, action) => {
            state.loadingpl = false;
            state.list = action.payload;
          })
          .addCase(fetchCategories.rejected, (state) => {
            state.loadingpl = false;
          });
      },
});

export default categorySlice.reducer;