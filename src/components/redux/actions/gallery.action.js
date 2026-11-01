

import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosNew from "../utils/axiosNew";

export const galleryAction = createAsyncThunk("/fetchall/gallery",async(g_id) => {
    try{
        const response = await axiosNew.get(`gallary_list?cat_id=${g_id}`);
        return {
            id: g_id,
            data: response.data,
        };
    }
    catch(error){
        return error;
    }
});