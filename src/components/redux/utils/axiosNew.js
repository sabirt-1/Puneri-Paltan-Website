

import axios from "axios";

const axiosNew = axios.create({
    baseURL: "https://appy.trycatchtech.com/v3/puneri_paltan",
    // timeout: 15000,
    // headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json"
    // }
});

export default axiosNew;