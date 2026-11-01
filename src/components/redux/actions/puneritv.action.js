


import axiosNew from "../utils/axiosNew";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTvlist = createAsyncThunk('/Tv_list', async(tv_id) => {
    try {
        const res=await axiosNew.get(`/puneri_tv_list?cat_id=${tv_id}`)
        return res.data;
    } catch (error) {
        throw error
    }
})
export const fetchPuneriTv=createAsyncThunk('/puneritv', async(id) => {
    try{
        const res = await axiosNew.get(`/single_puneri_tv?id=${id}`)
        return res.data;
    } catch (error) {
        throw error
    }
})

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axiosNew from "../utils/axiosNew";

// export const puneritvAction = createAsyncThunk("/fetchall/puneritv",async(ptv_id) => {
//     try{
//         const response = await axiosNew.get(`/puneri_tv_list?cat_id=${ptv_id}`)
//         return {
//             id:ptv_id,
//             data:response.data
//         }
//     }
//     catch(error){
//         return error
//     }
// })