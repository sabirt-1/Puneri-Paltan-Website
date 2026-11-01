
import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "./slice/playersSlice";
import categoryReducer from "./slice/category.Slice"
import singleReducer from "./slice/singleplayer.Slice";
import singleGalleryReducer from "./slice/singleGallery.Slice";
import seasonReducer from "./slice/seasonlist.Slice";
import galleryReducer from "./slice/gallery.Slice";
import puneritvReducer from "./slice/puneritv.slice";


export const store = configureStore({
  reducer: {
    category: categoryReducer,
    players: playersReducer,
    singleplayer: singleReducer,
    gallery: galleryReducer,
    season: seasonReducer,
    singlegallery: singleGalleryReducer,
    puneritv: puneritvReducer
    
  },
});
