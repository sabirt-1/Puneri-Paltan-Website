

import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosNew from "../utils/axiosNew";

export const seasonAction = createAsyncThunk("seasonlist/fetchAll",async() => {
    try{
        const response = await axiosNew.get("/season_list")
        return response.data
    }
    catch(error){
        return error
    }
})