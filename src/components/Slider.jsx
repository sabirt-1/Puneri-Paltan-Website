

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayers } from "../redux/player.action";
import { Link } from "react-router";

export default function Slider() {
  const dispatch = useDispatch();
  const { playerByCategory } = useSelector((state) => state.player);

  const allPlayers = Object.values(playerByCategory).flat();

  useEffect(() => {
    const categories = [1, 2, 3];
    categories.forEach((catid) => dispatch(fetchPlayers(catid)));
  }, [dispatch]);

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const goNext = () => swiperRef.current?.slideNext();
  const goPrev = () => swiperRef.current?.slidePrev();

  return (
    <>
     
      <div className="w-full py-12 flex flex-row flex-wrap items-center justify-center gap-16 mt-40">

      
        <div className="flex flex-col items-center justify-center gap-6 min-w-[200px]">

          <h1 className="text-[#ff7500] text-4xl md:text-6xl font-extrabold text-center">
            PLAYERS
          </h1>

        

        </div>

      
        <div className="w-full max-w-[900px]">
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={36}
            loop={allPlayers.length > 1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setActiveIndex(swiper.realIndex || 0);
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 36 },
            }}
          >
            {allPlayers.map((player, index) => {
              const isActive = index === activeIndex;

              return (
                <SwiperSlide key={index} className="flex justify-center">
                  <div className="flex flex-col items-center g-2">
                    <div
                      className="rounded-full flex items-center justify-center transition-all duration-500"
                      style={{
                        width: isActive ? 360 : 320,
                        height: isActive ? 360 : 320,
                        background: "rgba(0,0,0,0.45)",
                        filter: isActive
                          ? "brightness(1)"
                          : "brightness(0.45)",
                      }}
                    >
                      <img
                        
                        src={player.profile_image}
                        alt={player.name}
                        style={{
                          height: isActive ? 330 : 300,
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    <h3
                      className={`text-white mt-6 text-2xl md:text-3xl ${
                        isActive ? "opacity-100" : "opacity-40"
                      }`}
                    >
                      {player.name}
                    </h3>

                    <p
                      className={`text-[#ff7500] mt-1 ${
                        isActive ? "opacity-100" : "opacity-40"
                      }`}
                    >
                      {player.cat_name}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

     
<div className="flex justify-center mt-8">
  <div className="flex gap-4 justify-center items-center">
    <button
      onClick={goPrev}
      className="bg-white/10 text-white px-3 py-2 rounded-md hover:scale-110 transition"
    >
      <FaAngleLeft size={22} />
    </button>

    <button
      onClick={goNext}
      className="bg-white/10 text-white px-3 py-2 rounded-md hover:scale-110 transition"
    >
      <FaAngleRight size={22} />
    </button>
  </div>
</div>


<div className="flex justify-center mt-4">
  <Link to={"/players"}>
  <button
    className=" bg-[#ff7500] 
               text-white px-20 py-2 rounded-md text-lg font-semibold 
               shadow-lg border-2 border-white"
    style={{ transform: "skew(-15deg)" }}
  >
    Enter
  </button>
  </Link>
</div>

    </>
  );
}




// import { useEffect } from "react";
// // import axiosNew from
// import { useDispatch, useSelector } from "react-redux"
// import { fetchPlayers } from "./redux/actions/players.action";

// import { FaCaretRight } from "react-icons/fa";
// import { FaCaretLeft } from "react-icons/fa";




// export default function Players() {
//   const dispatch = useDispatch();
//   const { data, loading, error } = useSelector((state) => state.players);

//   useEffect(() => {
//     dispatch(fetchPlayers(1));

//   }, [dispatch]);

//   return (
//     <div>
//       <div className="w-full sm:w-full md:w-1/3 pl-1">
//         <div className="table h-[65vh] w-full">
//           <div className="table-cell align-middle text-center">
//             <h2 className="text-[90px] text-center ml-[-15%] mb-[-15px] [text-shadow:0_0_0_rgba(7,11,13,0.58),0_0_5px_rgba(6,10,11,0.57)]">Players</h2>
//             <h3 className="font-[Love-Nature] text-[90px] tracking-[7px] m-0 text-white text-center [text-shadow:0_0_0_rgba(7,11,13,0.58),0_0_5px_rgba(6,10,11,0.57)]"></h3>
//           </div>
//         </div>
//       </div>

//       <div className="pl-0 pr-0">
//         <div className="z-9 relative w-full h-620px text-center">
//           <button className="absolute bottom-[15%] right-[90px] border-0 z-999 w-[45px] h-[35px] rounded-[25px] bg-[#ddd]">
//             <i><FaCaretLeft /></i>
//           </button>
//           <button className="absolute bottom-[15%] right-[90px] border-0 z-999 w-[45px] h-[35px] rounded-[25px] bg-[#ddd]">
//             <i><FaCaretRight /></i>
//           </button>
//         </div>
//       </div>

//       {data.map((player) => (
//         <div key={player.id} className="">{player.name}
//           <div>
//             {player.profile_image}
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// // import React, { useEffect, useState, useMemo } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { fetchPlayers } from "./redux/actions/players.action";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { XMarkIcon } from "@heroicons/react/24/solid";

// // const containerVariants = {
// //   hidden: {},
// //   show: {
// //     transition: {
// //       staggerChildren: 0.07,
// //       delayChildren: 0.12,
// //     },
// //   },
// // };

// // const cardVariants = {
// //   hidden: { opacity: 0, y: 18, scale: 0.98 },
// //   show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 30 } },
// //   hover: { scale: 1.03, y: -6, transition: { type: "spring", stiffness: 400, damping: 24 } },
// // };

// // export default function Players() {
// //   const dispatch = useDispatch();
// //   const { data, loading, error } = useSelector((s) => s.players);

// //   useEffect(() => {
// //     dispatch(fetchPlayers());
// //   }, [dispatch]);

// //   const categories = useMemo(() => {
// //     const cats = [];
// //     (data || []).forEach((p) => {
// //       if (p?.cat_name && !cats.includes(p.cat_name)) cats.push(p.cat_name);
// //     });
// //     return cats.length ? cats : ["All"];
// //   }, [data]);

// //   const [active, setActive] = useState(categories[0] || "All");
// //   useEffect(() => {
// //     if (categories.length && !categories.includes(active)) setActive(categories[0]);
// //   }, [categories, active]);

// //   const players = (data || []).filter((p) => (active === "All" ? true : p.cat_name === active));

// //   // Modal state
// //   const [openPlayer, setOpenPlayer] = useState(null);

// //   if (loading) return <div className="p-12 text-center text-white">Loading players...</div>;
// //   if (error) return <div className="p-12 text-center text-red-400">Error: {error}</div>;
// //   if (!data || data.length === 0) return <div className="p-12 text-center text-white">No players found</div>;

// //   return (
// //     <section id="players" className="py-16 bg-black">
// //       <div className="max-w-7xl mx-auto px-6">
// //         {/* Header + Tabs */}
// //         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">
// //           <h2 className="text-3xl md:text-4xl font-extrabold text-white">Players</h2>

// //           <div className="flex items-center gap-4 flex-wrap">
// //             {categories.map((cat) => (
// //               <button
// //                 key={cat}
// //                 onClick={() => setActive(cat)}
// //                 className={`px-5 py-2 text-sm font-semibold rounded-md transition-all ${
// //                   active === cat
// //                     ? "text-[#ff7500] bg-white/5 border-b-4 border-[#ff7500]"
// //                     : "text-white/70 hover:text-[#ff7500] hover:bg-white/3"
// //                 }`}
// //                 aria-pressed={active === cat}
// //               >
// //                 {cat}
// //               </button>
// //             ))}

// //             {/* optional "All" */}
// //             <button
// //               onClick={() => setActive("All")}
// //               className={`px-5 py-2 text-sm font-semibold rounded-md transition-all ${
// //                 active === "All"
// //                   ? "text-[#ff7500] bg-white/5 border-b-4 border-[#ff7500]"
// //                   : "text-white/70 hover:text-[#ff7500] hover:bg-white/3"
// //               }`}
// //             >
// //               All
// //             </button>
// //           </div>
// //         </div>

// //         {/* Grid with framer-motion stagger */}
// //         <motion.div
// //           variants={containerVariants}
// //           initial="hidden"
// //           animate="show"
// //           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
// //         >
// //           {players.map((p) => {
// //             const id = p.id;
// //             const name = p.name;
// //             const position = p.position;
// //             const jersey = p.jersey_no;
// //             const image = p.profile_image || p.full_image || "/placeholder.png";
// //             const dob = p.date_of_birth;
// //             const nationality = p.nationality;

// //             return (
// //               <motion.article
// //                 key={id}
// //                 variants={cardVariants}
// //                 whileHover="hover"
// //                 className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#0b0b0b] to-[#070707] border border-gray-800 shadow-lg"
// //               >
// //                 {/* image area */}
// //                 <div className="w-full h-64 bg-black flex items-center justify-center overflow-hidden">
// //                   <img
// //                     src={image}
// //                     alt={name}
// //                     className="object-contain max-h-full transition-transform duration-300"
// //                     onError={(e) => (e.currentTarget.src = "/placeholder.png")}
// //                     loading="lazy"
// //                   />
// //                 </div>

// //                 {/* content */}
// //                 <div className="p-4">
// //                   <div className="flex items-baseline justify-between">
// //                     <h3 className="text-xl font-bold text-white">{name}</h3>
// //                     <span className="text-sm text-gray-300">#{jersey}</span>
// //                   </div>

// //                   <p className="text-[#ff7500] font-semibold mt-1">{position}</p>

// //                   <div className="mt-3 text-gray-400 text-sm space-y-1">
// //                     <div>Born: {dob}</div>
// //                     <div>Nationality: {nationality}</div>
// //                   </div>

// //                   {/* actions */}
// //                   <div className="mt-4 flex items-center justify-between">
// //                     <button
// //                       onClick={() => setOpenPlayer(p)}
// //                       className="inline-flex items-center gap-2 px-4 py-2 bg-white/6 text-white rounded-md hover:bg-white/10 transition"
// //                     >
// //                       View
// //                     </button>

// //                     <div className="text-xs text-gray-400">Category: {p.cat_name}</div>
// //                   </div>
// //                 </div>
// //               </motion.article>
// //             );
// //           })}
// //         </motion.div>
// //       </div>

// //       {/* Modal: Show full image & details */}
// //       <AnimatePresence>
// //         {openPlayer && (
// //           <motion.div
// //             className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 p-6"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //           >
// //             <motion.div
// //               className="max-w-5xl w-full bg-gradient-to-b from-[#0b0b0b] to-[#070707] rounded-2xl overflow-hidden shadow-2xl"
// //               initial={{ y: 40, scale: 0.97, opacity: 0 }}
// //               animate={{ y: 0, scale: 1, opacity: 1 }}
// //               exit={{ y: 20, scale: 0.97, opacity: 0 }}
// //               transition={{ type: "spring", stiffness: 300, damping: 30 }}
// //             >
// //               <div className="relative">
// //                 <button
// //                   className="absolute right-4 top-4 z-50 text-white bg-black/30 p-2 rounded-md"
// //                   onClick={() => setOpenPlayer(null)}
// //                   aria-label="Close"
// //                 >
// //                   <XMarkIcon className="h-6 w-6" />
// //                 </button>

// //                 <div className="grid grid-cols-1 md:grid-cols-2">
// //                   <div className="flex items-center justify-center p-6 bg-black">
// //                     <img
// //                       src={openPlayer.full_image || openPlayer.profile_image}
// //                       alt={openPlayer.name}
// //                       className="max-h-[70vh] object-contain"
// //                       onError={(e) => (e.currentTarget.src = "/placeholder.png")}
// //                     />
// //                   </div>

// //                   <div className="p-8 text-white">
// //                     <h3 className="text-3xl font-bold mb-2">{openPlayer.name}</h3>
// //                     <p className="text-[#ff7500] font-semibold mb-4">{openPlayer.position}</p>

// //                     <div className="text-gray-300 mb-4">
// //                       <div><span className="font-semibold">Jersey:</span> #{openPlayer.jersey_no}</div>
// //                       <div><span className="font-semibold">DOB:</span> {openPlayer.date_of_birth}</div>
// //                       <div><span className="font-semibold">Nationality:</span> {openPlayer.nationality}</div>
// //                       <div><span className="font-semibold">Category:</span> {openPlayer.cat_name}</div>
// //                     </div>

// //                     <p className="text-gray-400">More stats & bio would go here (you can extend the API to include stats).</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </section>
// //   );
// // }

// // // export default function Players() {
// // //   const dispatch = useDispatch();
// // //   const { data, loading, error } = useSelector((state) => state.players);

// // //   // Extract unique categories from API
// // //   const categories = [...new Set((data || []).map(p => p.cat_name))];

// // //   const [activeTab, setActiveTab] = useState(categories[0] || "");

// // //   useEffect(() => {
// // //     dispatch(fetchPlayers());
// // //   }, [dispatch]);

// // //   if (loading) return <p className="text-center py-10 text-white">Loading players...</p>;
// // //   if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
// // //   if (!data) return null;

// // //   const filteredPlayers = data.filter(p => p.cat_name === activeTab);

// // //   return (
// // //     <section className="w-full bg-black py-20">
// // //       {/* Tabs */}
// // //       <div className="flex justify-center mb-10 space-x-6">
// // //         {categories.map((cat) => (
// // //           <button
// // //             key={cat}
// // //             className={`px-6 py-2 text-lg font-bold border-b-4 transition-all ${
// // //               activeTab === cat
// // //                 ? "border-[#ff7500] text-[#ff7500]"
// // //                 : "border-transparent text-white hover:text-[#ff7500]"
// // //             }`}
// // //             onClick={() => setActiveTab(cat)}
// // //           >
// // //             {cat}
// // //           </button>
// // //         ))}
// // //       </div>

// // //       {/* Player Grid */}
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 px-10">
// // //         {filteredPlayers.map((player) => (
// // //           <div
// // //             key={player.id}
// // //             className="bg-[#111] rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-[#ff7500] transition-all"
// // //           >
// // //             <img
// // //               src={player.profile_image}
// // //               alt={player.name}
// // //               className="w-full h-[260px] object-contain bg-black"
// // //             />

// // //             <div className="p-5 text-center text-white">
// // //               <h3 className="text-2xl font-bold">{player.name}</h3>
// // //               <p className="text-[#ff7500] font-semibold mt-1">{player.position}</p>
// // //               <p className="text-gray-400 mt-1">Jersey No: {player.jersey_no}</p>
// // //               <p className="text-gray-500 text-sm mt-2">
// // //                 DOB: {player.date_of_birth}
// // //               </p>
// // //               <p className="text-gray-500 text-sm">Nationality: {player.nationality}</p>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // }
