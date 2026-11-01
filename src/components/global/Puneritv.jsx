import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPuneriTv } from "../redux/actions/puneritv.action";
import Loading from "./Loading";
import Banner from "./Banner";
import Blockele from "./Block";



function Puneritv() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { singleTv, loading } = useSelector((state) => state.puneritv);

    useEffect(() => {
        if (id) dispatch(fetchPuneriTv(id));
    }, [id]);

    if (loading || !singleTv)
        return (
    <Loading/>
    );

    return (
        <>
        <Banner text={singleTv.cat_name || "Puneri Tv"} />

        <div className="p-4 text-black" style={{padding:"50px"}}>

            {/* <h1 className="text-xl md:text-5xl text-center bg-[#f40] -skew-x-6 font-bold md:font-extrabold " style={{marginBottom:"10px",padding:"10px"}}>{singleTv.name}</h1> */}
            <Blockele title={singleTv.name} translate="100" width="full"/>
            <div className="h-5"></div>
            <div className="w-full aspect-video mb-4 p-10">
            <iframe
                className="w-full h-full rounded"
                src={`https://www.youtube.com/embed/${singleTv.url}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            </div>

            {singleTv.description && (
            <p className="mt-2 text-gray-300">{singleTv.name}</p>
            )}
      </div>
        </>
    )
}

export default Puneritv;




// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { puneritvAction } from "../redux/actions/puneritv.action";
// import imgSrc1 from "../../assets/puneritvplayer.png";
// import imgSrc2 from "../../assets/banner-title.png";
// import { seasonAction } from "../redux/actions/seasonlist.action";



// function Puneritv() {
//     const dispatch = useDispatch();
//     const [selectedSeason, setSelectedSeason ] = useState(1);
//     const { pun_list } = useSelector((state) => state.puneritv);
//     const { season_list } = useSelector((state) => state.season);

//     const [ openVideo, setOpenVideo ] = useState(null);
//     const [ showModal, setShowModal ] = useState(false);

//     useEffect(() => {
//         const puneritv = [6, 7];
//         puneritv.forEach((id) => dispatch(puneritvAction(id)));
//     }, []);

//     useEffect(() => {
//         dispatch(seasonAction());
//     }, [dispatch])

//     const seasonData = pun_list[ selectedSeason ] || [];

//     return (
//         <>

//         <div className="relative w-full h-[500] bg-[url('/puneri-tv-mob -banner-s12.jpg')] sm:bg-[url('/puneri-tv-mob-banner-s12.jpg')] md:bg-[url('/singlegallery.jpg')] lg:bg-[url('/singlegallery.jpg')] bg-cover bg-center flex items-center justify-center flex-col sm:flex-col md:flex-col lg:flex-row mb-10">
//             <div className="relative mt-0 sm:mt-10 md:mt-20 lg:mt-0 hidden sm:hidden md:block lg:block">
//                 <img data-aos="fade-down" src={imgSrc2} alt="puneritvplayer/logo1" width={400} />
//                 <h1 data-aos="fade-up" className="h-[200px] absolute top-15 text-white text-4xl sm:text-4xl md:text-5xl lg:text-[100px] font-extrabold text-center">PUNERI TV</h1>
//             </div>
//             <img data-aos="fade-down" src={imgSrc1} alt="banner-title/logo" className=" h-[400px] hidden sm:hidden md:hidden lg:block w-[600px] mt-25" />
//         </div>

//         <div className="flex flex-wrap items-center justify-center">
//             {season_list.map((s) => (
//                 <button key={s.id} onClick={() => setSelectedSeason(s.id)} className={`px-6 py-2 mx-2 text-white text-lg font-semibold transition
//                 ${selectedSeason === s.id ? "bg-gray-500" : "bg-[#ff4400]"}`} style={{ transform: "skew(-15deg)" }}>
//                     {s.cat_name}
//                 </button>
//             ))}
//         </div>

//         <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
//             {seasonData.map((s, index) => {
//                 console.log(s.url);
                
//                 const videoID = s.url?.split("v=")[1];

//                 return (
//                     <div key={index}>
//                         <div className="w-full h-[300px] md:h-[450px] lg:h-[550px] flex items-center justify-center bg-black cursor-pointer"
//                         onClick={() => {
//                             setOpenVideo(videoID);
//                             setShowModal(true);
//                         }}>
//                             <img 
//                             src={`https://img.youtube.com/vi/${s.url}/hqdefault.img`}/>
//                             <p className="text-white text-xl">Click to play video</p>
//                         </div>

//                         <div className="flex mt-2">
//                             <div className="h-[73px] flex-1 bg-[#ff4400]">
//                                 <h1 className="text-lg lg:text-2xl text=white text-center font-bold">
//                                     {s.name}
//                                 </h1>
//                             </div>

//                             <div className="h-[73px] w-[15px] bg-[#ff4400] mx-2" style={{ transform: "skew(-2deg)"}}></div>

//                             <div className="h-[73px] w-[15px] bg-[#ff4400]" style={{ transform: "skew(-20deg)" }}></div>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>

//         {showModal && (
//             <div className="fixed inset-0 bg-[#00000023] bg-opacity-70 flex items-center justify-center z-50">
//                 <div className=" bg-black w-[90%] md:w-[70%] lg:w-[60%] h-[300px] md:h-[500px] relative shadow-xl">
//                     <button onClick={() => setShowModal(false)}
//                         className="absolute top-2 right-2 text-white text-3xl font-bold z-50">
//                         ×
//                     </button>

//                     <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${openVideo}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen frameborder="0"></iframe>
//                 </div>
//             </div>
//         )}
//         </>
//     );
// }

// export default Puneritv