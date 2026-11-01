

import { createSlice } from "@reduxjs/toolkit";
import { fetchPlayers } from "../actions/players.action";

const playerSlice = createSlice({
  name: "players",
  initialState: {
    playerByCategory: {},
    loadingp: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.pending, (state) => {
        state.loadingp = true;
      })
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        state.loadingp = false;
        state.playerByCategory[action.payload.cat_id] = action.payload.players;
        console.log(action.payload);
        
      })
      .addCase(fetchPlayers.rejected, (state) => {
        state.loadingp = false;
      });
  },
});

export default playerSlice.reducer;














// // src/features/players/players.Slice.js
// import { createSlice } from "@reduxjs/toolkit";
// // import { fetchPlayers } from "/"; // your thunk file
// import { fetchPlayers } from "../actions/players.action";

// const initialState = {
//   playerByCtegory: {},
//   loadingp: false,
//   error: null,
// };

// const playersSlice = createSlice({
//   name: "players",
//   initialState,
//   reducers: {
//     clearPlayers(state) {
//       state.data = null;
//       state.loadingp = false;
//       state.error = null;
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPlayers.pending, (state) => {
//         state.loadingp = true;
//       })
//       .addCase(fetchPlayers.fulfilled, (state, action) => {
//         state.loadingp = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchPlayers.rejected, (state, action) => {
//         state.loadingp = false;
//         state.error = action.payload || action.error?.message;
//       });
//   }
// });

// // export const { clearPlayers } = playersSlice.actions;
// export default playersSlice.reducer;
