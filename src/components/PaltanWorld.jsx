

import React from "react";
import { Link } from 'react-router-dom'

function Paltanworld() {
    return(
        <> 
        <div className="
        w-full
        sm:h-[700px] md:h-[600px] lg:h-[613px] 
        bg-[url('/paltan1.png')] sm:bg-[url('/paltan1.png')] md:bg-[url('/paltan.png')] lg:bg-[url('/paltan.png')] bg-cover bg-center h-screen
        "></div>


        <div className="flex-col sm-flex-col md:flex-row lg-flex-row flex flex-wrap">

            <div className="w-full sm:w-full md:w-[50%] lg:w-[50%] bg-[url('/puneritv1.png')] bg-center bg-cover h-screen flex justify-center items-center">
                <Link to={'/paltanworld/puneri-tv'}>
                    <h1 className="text-center font-extrabold text-white text-4xl md:text-6xl lg:text-6xl py-40">PUNERI TV</h1>
                </Link>
            </div>

            <div className="w-full sm:w-full md:w-[50%] lg:w-[50%] bg-[url('/gallery.png')] bg-cover bg-center h-screen flex justify-center items-center">
                <Link to={'/paltanworld/gallery'}>
                    <h1 className="text-center font-extrabold text-white text-4xl sm:text-4xl md:text-6xl lg:text-6xl py-40">GALLERY</h1>
                </Link>
            </div>

        </div>
        </>
    )
}

export default Paltanworld;