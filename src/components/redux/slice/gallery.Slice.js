

import { createSlice } from "@reduxjs/toolkit";
import { galleryAction } from "../actions/gallery.action";


const initialState = {
    g_list:{},
    loadingg:false
}

const gallerySlice = createSlice({
    name:"gallery",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(galleryAction.pending,(state) => {
            state.loadingg = true
        })
        .addCase(galleryAction.fulfilled,(state,action) => {
            const {id,data} = action.payload
            state.g_list[id] = data
            state.loadingg = false
        })
        .addCase(galleryAction.rejected,(state) => {
            state.loadingg = false
        })
    }
})

const galleryReducer = gallerySlice.reducer
export default galleryReducer