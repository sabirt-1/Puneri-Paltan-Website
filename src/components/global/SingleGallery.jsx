import { original } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singlegalleryAction } from "../redux/actions/singleGallery.action";
import imgSrc1 from "../../assets/singlegalleryplayer.png";
import imgSrc2 from "../../assets/banner-title.png";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



function SingleGallery() {
    const dispatch = useDispatch();
    const { gallery_list } = useSelector((state) => state.singlegallery);
    const { id } = useParams();

    useEffect(() => {
        if (id) dispatch(singlegalleryAction(id));
    }, [dispatch, id]);

    const [showViewer, setShowViewer] = useState(false);
    const [startIndex, setStartIndex] = useState(0);

    const galleryItems = gallery_list.match_images?.map((img) => ({
        original: img,
        thumbnail: img,
    }));

    return (
        <>
        <div className="relative w-full h-[500px] bg-[url('/punerigallerym.jpg')] sm:bg-[url('/punerigallerym.jpg')] md:bg-[url('/singlegallery.jpg')] lg:bg-[url('/singlegallery.jpg')] bg-cover bg-center flex items-center justify-center flex-col sm:flex-col md:flex-col lg:flex-row">
            <div className="relative mt-0 sm:mt-10 md:mt-20 lg:mt-0 hidden sm:hidden md:block lg:block">
                <img data-aos="fade-down" src={imgSrc2} alt="logo2" width={400} />
                <h1 data-aos="fade-up" className="h-[200px] absolute top-15 text-white text-4xl md:text-5xl lg:text-[70px] font-extrabold ">Gallery</h1>
            </div>
            <img data-aos="fade-down" src={imgSrc1} alt="logo1" className="h-[400px] hidden lg:block w-[600px]" />
        </div>

        <div>
            <h1 className="text-5xl text-[#ff7500] py-10 text-center "> {gallery_list.name} </h1>
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 mx-15 sm:mx-10 md:mx-20 lg:mx-30">
                {gallery_list.match_images?.map((img, i) => (
                    <img src={img} key={i} onClick={() => {setStartIndex(i); setShowViewer(true); }} data-aos="flip-down" className="cursor-pointer 
                    w-[300px] sm:w-[200px] md:w-[330px] lg:w-[330px] 
                    h-[200px] sm:h-[230px] md:h-[230px] lg:h-[260px] object-cover" alt="" />
                ))}
            </div>
        </div>

        {showViewer && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                <button className="absolute top-5 right-5 text-white text-3xl" onClick={() => setShowViewer(false)}>
                    ✕
                </button>

                <div className="w-full max-w-5xl">
                    <ImageGallery
                    items={galleryItems} 
                    startIndex={startIndex} 
                    showFullscreenButton={false} 
                    showPlayButton={false}
                    />
                </div>
            </div>
        )}
        </>
    )
}

export default SingleGallery;