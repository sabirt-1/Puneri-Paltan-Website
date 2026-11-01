

import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosNew from "../utils/axiosNew";

export const singlegalleryAction = createAsyncThunk("single/Gallery/Fetchall",async(id) => {
    try{
        const response = await axiosNew.get(`single_gallary?id=${id}`)
        return response.data
    }
    catch(error){
        return error
    }
})