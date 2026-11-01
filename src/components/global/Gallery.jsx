

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import imgSrc1 from "../../assets/galleryplayer.png";
import imgSrc2 from "../../assets/banner-title.png";
import { galleryAction } from "../redux/actions/gallery.action"; 
import { seasonAction } from "../redux/actions/seasonlist.action";
import { Link } from "react-router-dom"



function Gallery() {
    const dispatch = useDispatch();
    const { g_list, loadingg } = useSelector((state) => state.gallery);
    const { season_list } = useSelector((state) => state.season);

    const [selectedSeason, setSelectedSeason] = useState(1);
    const galleryid = [1, 3, 4, 7];

    useEffect(() => {
        galleryid.forEach((id) => dispatch(galleryAction(id)));
    }, [dispatch]);

    useEffect(() => {
        dispatch(seasonAction());
    }, [dispatch]);

    const seasonData = g_list[selectedSeason] || [];

    return (
        <>

        <div className="relative w-full h-[500px] bg-[url('/punerigallerym.jpg')] sm:bg-[url('/punerigallerym.jpg')] md:bg-[url('/singlegallery.jpg')] lg:bg-[url('/singlegallery.jpg')] bg-cover bg-center flex items-center justify-center flex-col sm:flex-col md:flex-col lg:flex-row">

            <div className="relative mt-0 sm:mt-10 md:mt-20 lg:mt-0 hidden sm:hidden md:block lg:block">
                <img data-aos="fade-down" src={imgSrc2} alt="loge gallery" width={400} />
                <h1 data-aos='fade-up' className="h-[200px] absolute top-15 text-white text-4xl sm:text-4xl md:text-5xl lg:text-[70px] font-extrabold md:text-center">Gallery</h1>
            </div>
            <img data-aos="fade-down" src={imgSrc1} alt="logo gallery1" className="h-[400px] hidden sm:hidden md:hidden lg:block w-[600px] mt-25" />
        </div>

        <div className="flex justify-center flex-wrap my-10">
            {season_list.map((s) => (
                <button
                key={s.id}
                onClick={() => setSelectedSeason(s.id)}
                className={`px-6 py-2 mx-2 text-white text-lg font-semibold transition
                ${selectedSeason === s.id ? "bg-gray-500" : "bg-[#ff4400]"}`} style={{ transform: "skew(-15deg)"}}>
                    {s.cat_name}
                </button>
            ))}
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {seasonData.map((match, index) => (
                <div key={index} className="bg-white shadow-lg pb-4">
                     
                    {match.match_images?.map((img, i) => (
                        <div key={i} className="mb-6">
                            <Link to={`/paltanworld/gallery/${match.id}`}>
                            <img src={img} alt="" className="w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[550px] object-cover"/>
                            </Link>

                            <div className="flex mt-2">
                                <div className="h-[73px] flex-1 bg-[#ff4400] " style={{ transform: "skew(-5deg)"}}>
                                    <h1 className="text-lg lg:text-2xl text-white text-center font-bold">
                                        {match.name}
                                    </h1>
                                </div>
                                <div className="h-[73px] w-[15px] bg-[#ff4400] mx-2" style={{ transform: "skew(-5deg)"}}></div>
                                <div className="h-[73px] w-[15px] bg-[#ff4400] " style={{ transform: "skew(-5deg)"}}></div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
        </>
    );
}

export default Gallery;