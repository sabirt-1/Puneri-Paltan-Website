
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosNew from "../utils/axiosNew";

export const fetchPlayers = createAsyncThunk(
  "players/fetch-all",
  async (cat_id) => {
    try {
      const response = await axiosNew.get(`player_list?cat_id=${cat_id}`);

      return {
        cat_id,
       players: response.data ?? [],
      };
    } catch (error) {
      return { cat_id, players: [] };
    }
  }
);
















// import { createAsyncThunk } from "@reduxjs/toolkit";
// // import axiosNew from "../../axiosNew";
// import axiosNew from "../utils/axiosNew";

// export const fetchPlayers = createAsyncThunk("players/fetchAll",
//     async (id) => {
//         try{
//             const response = await axiosNew.get(`https://appy.trycatchtech.com/v3/puneri_paltan/player_list?cat_id=${id}`);
//             console.log(response.data);
//             return response.data;
//         }catch(error) {
           
//             return error;
//         }
//     }
// );