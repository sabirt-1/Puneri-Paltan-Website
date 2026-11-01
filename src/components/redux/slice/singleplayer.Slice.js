


import { createSlice } from "@reduxjs/toolkit";
import { fetchSinglePlayer } from "../actions/singleplayer.action";
import { fetchCategory, fetchPlayersByCat } from "../actions/singleplayer.action";

const initialState={
    categories:[],
    loading:false,
    error: null,
    message: null,
    playersByCategory: {},
    // list_single:[],
    loadingps:false


}
const singlePlayerSlice=createSlice({
    name:"singleplayer",
    initialState,
    extraReducers:(builder)=>{
        builder
          .addCase(fetchCategory.pending,(state)=>{
            state.loading=true;
          })
          .addCase(fetchCategory.fulfilled,(state,action)=>{
              console.log(action.payload);
              state.categories=action.payload
              state.loading=false;
              state.message="Category fetched successfully"
          })
          .addCase(fetchCategory.rejected,(state)=>{
              state.loading=false;
              state.error="Could not fetch data"
          })
          .addCase(fetchPlayersByCat.pending,(state)=>{
              state.loading=true;
          })
          .addCase(fetchPlayersByCat.fulfilled,(state,action)=>{
              console.log(action.payload);
              // state.categories=action.payload
              const { catId, players } = action.payload;
              console.log(catId,players);
              
              state.playersByCategory = { ...state.playersByCategory, [catId]: players };
              state.loading=false;
              state.message="Player in Category fetched successfully"
          })
          .addCase(fetchPlayersByCat.rejected,(state)=>{
              state.loading=false;
              state.error="Could not fetch data"
          })
         .addCase(fetchSinglePlayer.pending, (state) => {
                state.loadingps = true;
              })
              .addCase(fetchSinglePlayer.fulfilled, (state, action) => {
                state.loadingps = false;
                state.list_single=action.payload;
                console.log(state.list_single)
                
              })
              .addCase(fetchSinglePlayer.rejected, (state) => {
                state.loadingps = false;
              });
          },
    }
   

    
)
export const singlePlyerAction=singlePlayerSlice.actions
const singleReducer=singlePlayerSlice.reducer
export default singleReducer






// import { createSlice } from "@reduxjs/toolkit";
// import { fetchSinglePlayer } from "../actions/singleplayer.action";

// const initialState = {
//     list_single:[],
//     loadingsp:false
// }

// const singleplayerSlice = createSlice({
//     name:"singleplayer",
//     initialState,
//     extraReducers:(builder) => {
//         builder
//         .addCase(fetchSinglePlayer.pending, (state) => {
//             state.loadingsp = true;
//         })
//         .addCase(fetchSinglePlayer.fulfilled, (state,action) => {
//             state.loadingsp = false;
//             state.list_single = action.payload;
//             console.log(state.list_single);
//         })
//         .addCase(fetchSinglePlayer.rejected, (state) => {
//             state.loadingsp = false;
//         })
//     }
// })

// export const singlePlayerAction = singleplayerSlice.actions
// const singleReducer = singleplayerSlice.reducer
// export default singleReducer