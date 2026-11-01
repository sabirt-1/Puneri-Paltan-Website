


import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosNew from "../utils/axiosNew";

export const fetchSinglePlayer = createAsyncThunk(
  "single-player/fetch-all",
  async (id) => {
    
    const response = await axiosNew.get(`/single_player?id=${id}`);
    return response.data;
  }
);

export const fetchCategory=createAsyncThunk('category',async ()=>{
    try {
        const res=await axiosNew.get('/category_list');
        // return response.data;
        return (res.data && res.data.data) ? res.data.data : (res.data || []);
    } catch (error) {
        throw error
    }
})

export const fetchPlayersByCat = createAsyncThunk('pp/fetchPlayersByCat', async (catId) => {
    try {
        const res = await axiosNew.get(`/player_list?cat_id=${catId}`);
        // return response.data;
        const payload = (res.data && res.data.data) ? res.data.data : (res.data || []);
        return { catId, players: payload };
    } catch (error) {
        throw error
    }
})


// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axiosNew from "../utils/axiosNew";

// export const fetchSinglePlayer = createAsyncThunk("single-player/fetch-all",async(id) => {
//     const response = await axiosNew.get(`/single_player?id=${id}`);
//     return response.data;
// });