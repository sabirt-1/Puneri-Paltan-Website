

import { createSlice } from "@reduxjs/toolkit";
import { seasonAction } from "../actions/seasonlist.action";

const initialState = {
    season_list:[],
    loadingSeas:false
}

const seasonSlice = createSlice({
    name:"season",
    initialState,
    extraReducers:(builder) => {
        builder
        .addCase(seasonAction.pending,((state) => {
            state.loadingSeas = true
        }))
        .addCase(seasonAction.fulfilled,((state,action) => {
            state.loadingSeas = false,
            state.season_list = action.payload
        }))
        .addCase(seasonAction.rejected,((state) => {
            state.loadingSeas = false
        }))
    }
})

const seasonReducer = seasonSlice.reducer
export default seasonReducer