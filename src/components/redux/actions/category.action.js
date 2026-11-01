

import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosNew from "../utils/axiosNew";

export const fetchCategories = createAsyncThunk(
    "category/fetch-all",
    async () => {
        const response = await axiosNew.get("category_list");
        return response.data;
    }
);