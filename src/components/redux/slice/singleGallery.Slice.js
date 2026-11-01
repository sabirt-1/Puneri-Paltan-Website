

import { createSlice } from "@reduxjs/toolkit";
import { singlegalleryAction } from "../actions/singleGallery.action";

const initialState = {
    gallery_list:[],
    loadingGallery:false
}

const singleGallerySlice = createSlice({
    name:"singlegallery",
    initialState,
    extraReducers:(builder) => {
        builder
        .addCase(singlegalleryAction.pending, (state) => {
            state.loadingGallery = true;
        })
        .addCase(singlegalleryAction.fulfilled, (state,action) => {
            state.loadingGallery = false;
            state.gallery_list = action.payload;
        })
        .addCase(singlegalleryAction.rejected, (state) => {
            state.loadingGallery = false;
        })
    }
})

const singleGalleryReducer = singleGallerySlice.reducer
export default singleGalleryReducer