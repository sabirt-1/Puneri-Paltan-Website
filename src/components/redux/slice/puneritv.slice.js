


import { createSlice } from "@reduxjs/toolkit";
import { fetchPuneriTv, fetchTvlist } from "../actions/puneritv.action";


const initialState={
    tvlist:[],
    loading:false,
    error:null,
    message:null,
    singleTv:null
}

const TvSlice=createSlice({
    name:"puneritv",
    initialState,
    reducers:{},
    extraReducers:(builders)=>{
        builders
        .addCase(fetchTvlist.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchTvlist.fulfilled,(state,action)=> {
            console.log(action.payload);
            state.tvlist=action.payload;
            state.loading=false;
            state.message="Tv list fetched successfully"
        })
        .addCase(fetchTvlist.rejected,(state)=>{
            state.loading=false;
            state.error="Could not fetch data"
        })
        .addCase(fetchPuneriTv.pending,(state)=> {
            state.loading=true;
        })
        .addCase(fetchPuneriTv.fulfilled,(state,action) => {
            console.log(action.payload);
            state.singleTv=action.payload;
            state.loading=false;
            state.message="Tv list fetched successfully"
        })
        .addCase(fetchPuneriTv.rejected,(state)=>{
            state.loading=false;
            state.error="Could not fetch data"
        })
    }
})
const TvReducer=TvSlice.reducer;
export default TvReducer;


// import { createSlice } from "@reduxjs/toolkit";
// import { puneritvAction } from "../actions/puneritv.action";

// const initialState = {
//     pun_list:{},
//     loadingptv:false
// }
// const puneritvSlice = createSlice({
//     name:"puneritv",
//     initialState,
//     extraReducers:(builder)=>{
//         builder
//         .addCase(puneritvAction.pending,(state) => {
//             state.loadingptv = true
//         })
//         .addCase(puneritvAction.fulfilled,(state,action) => {
//             const {id, data} = action.payload
//             state.pun_list[id] = data
//             state.loadingptv = false
//         })
//         .addCase(puneritvAction.rejected,(state) =>{
//             state.loadingptv = false
//         })
//     }
// })

// const puneritvReducer = puneritvSlice.reducer
// export default puneritvReducer