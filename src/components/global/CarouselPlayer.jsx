import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayers } from "../redux/actions/players.action";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import 'swiper/css'
import 'swiper/css/navigation';
import { Link } from 'react-router';




function CarouselPlayer() {
    const dispatch = useDispatch();
    const { playerByCategory } = useSelector((state) => state.players);

    const allPlayers = Object.values(playerByCategory || {}).flat();

    useEffect(() => {
        [1, 2, 3].forEach((cat) => dispatch(fetchPlayers(cat)));
    }, [dispatch]);

    return (
        <div className="mt-20">
            <h1 className="text-center text-[70px] font-extrabold text-[#ff7500] mb-10">OTHER PLAYERS</h1>

            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 2000 }}
                // loop={true}
                loop={allPlayers.length > 2}

                slidesPerView={2}
                spaceBetween={0}
                className="w-[90%] mx-auto"
            >
                
                {allPlayers.map((p, i) => (
                
                <SwiperSlide key={i}>
                    <Link to={`/player/${p.id}`}>
                    <div className="relative w-full h-[400px] bg-black text-white overflow-hidden mb-10">
                    
                    
                    <div
                        className="absolute inset-0 bg-black"
                        style={{
                        transform: "skew(-10deg)",
                        transformOrigin: "left top",
                        }}
                    />

                    
                    <img
                        src={p.profile_image}
                        alt={p.name}
                        className="absolute right-0 bottom-0 h-[380px] z-10"
                    />

                    
                    <div className="absolute top-4 left-4 bg-[#ff7500] text-white text-3xl px-4 py-1 font-bold z-20">
                        {p.jersey_no}
                    </div>

                    
                    <div className="absolute left-10 top-1/2 -translate-y-1/2 z-20">
                        <h2 className="text-[32px] font-bold">{p.name}</h2>
                        <p className="text-[20px] text-[#ff7500]">{p.cat_name}</p>
                    </div>

                    </div>
                    </Link>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CarouselPlayer;