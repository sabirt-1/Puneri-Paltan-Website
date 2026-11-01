

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../redux/actions/singleplayer.action";
import CarouselPlayer from "./CarouselPlayer";

// // import Carousel from './CarouselPlayer';


function SinglePlayer() {
  const dispatch = useDispatch();
  const { list_single, loadingps } = useSelector(state => state.singleplayer);
  console.log(list_single);

   

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(fetchSinglePlayer(id));
  }, [id]);

 
  if (loadingps) {
    return <div>Loading...</div>;
  }
  

  

  return (
    <>
      {(list_single || []).map((list, index) => (
        <div key={index}>
          <div className='flex flex-wrap items-center justify-center w-full h-[600px] bg-[url("/playerbanner.jpg")]'>
            <img src={list.profile_image} alt="Profile" className='h-[400px] pr-0 sm:pr-10 md:pr-70 lg:pr-70 ' />
            <h1 className='font-extrabold text-6xl text-[#ff7500]'>{list.name}</h1>
          </div>

          <div className='flex flex-wrap items-center justify-center mt-20'>
            <img src={list.full_image} height={400} alt="Full Image" className='pr-0 sm:pr-10 md:pr-70 lg:pr-70 ' />
            <div>
              <div className='flex flex-wrap gap-5'>
                <div>
                  <span className='w-[200px] h-[30px] text-4xl text-white bg-[#ff4400] px-10'>JERSEY NO</span>
                  <h5 className='text-center font-extrabold mt-5 text-3xl'>{list.jersey_no}</h5>
                </div>
                <div>
                  <span className='w-[200px] h-[30px] text-4xl text-white bg-[#ff4400] px-10'>POSITION</span>
                  <h5 className='text-center font-extrabold mt-5 text-3xl'>{list.position}</h5>
                </div>
              </div>

              <div className='mt-[200px]'>
                <span className='w-[200px] h-[30px] text-4xl text-white bg-[#ff4400] px-10 '>VITALS</span>
                <div className='flex flex-wrap justify-between items-center mt-5'>
                  <h4 className='text-gray-400 text-3xl'>NAME</h4>
                  <h3 className='text-black text-center font-extrabold text-3xl'>{list.name}</h3>
                </div>
                <div className='flex flex-wrap justify-between items-center mt-5'>
                  <h4 className='text-gray-400 text-3xl'>DATE-OF-BIRTH</h4>
                  <h3 className='text-black text-center font-extrabold text-3xl'>{list.date_of_birth}</h3>
                </div>
                <div className='flex flex-wrap justify-between items-center mt-5'>
                  <h4 className='text-gray-400 text-3xl'>NATIONALITY</h4>
                  <h3 className='text-black text-center font-extrabold text-3xl'>{list.nationality}</h3>
                </div>
               
              </div>
            </div>
          </div>

              <div className="w-full bg-[#f2f3f5] py-10">

    
      <h1 className="text-center text-[70px] font-extrabold text-[#ff7500] mb-10">
        STATISTICS
      </h1>

      
      <div className="mb-20 flex flex-wrap ">
        <div className="flex">
            <div
              className="h-[73px] w-[300px] bg-[#ff4400]"
              style={{ transform: "skew(-15deg)" }}
            >
              <h1 className="text-6xl text-white text-end p-2">
               OVERALL
              </h1>
            </div>
            <div className="h-[73px] w-[15px] bg-[#ff4400] mx-2" style={{ transform: "skew(-15deg)" }}></div>
            <div className="h-[73px] w-[15px] bg-[#ff4400]" style={{ transform: "skew(-15deg)" }}></div>
          </div>


        <div className="flex flex-wrap gap-10 mt-10 text-center">
          <div>
            <h2 className="text-4xl font-extrabold bg-white inline-block px-6 py-2 shadow">{list.Matches_played}</h2>
            <p className="mt-2 text-gray-500 font-semibold">MATCHES PLAYED</p>
          </div>

          <div>
            <h2 className="text-4xl font-extrabold bg-white inline-block px-6 py-2 shadow">{list.total_ponints_earned}</h2>
            <p className="mt-2 text-gray-500 font-semibold">TOTAL POINTS EARNED</p>
          </div>

          <div>
            <h2 className="text-4xl font-extrabold bg-white inline-block px-6 py-2 shadow">{list.most_points_in_a_match}</h2>
            <p className="mt-2 text-gray-500 font-semibold">MOST POINTS IN A MATCH</p>
          </div>

          <div>
            <h2 className="text-4xl font-extrabold bg-white inline-block px-6 py-2 shadow">{list.not_out_percentage}</h2>
            <p className="mt-2 text-gray-500 font-semibold">NOT OUT PERCENTAGE</p>
          </div>
        </div>
      </div>

     
      <div className="mb-20 flex flex-wrap">
         <div className="flex">
            <div
              className="h-[73px] w-[300px] bg-[#ff4400]"
              style={{ transform: "skew(-15deg)" }}
            >
              <h1 className="text-6xl text-white text-end p-2">
                RAIDS
              </h1>
            </div>
            <div className="h-[73px] w-[15px] bg-[#ff4400] mx-2" style={{ transform: "skew(-15deg)" }}></div>
            <div className="h-[73px] w-[15px] bg-[#ff4400]" style={{ transform: "skew(-15deg)" }}></div>
          </div>


        <div className="flex flex-wrap gap-10 mt-10 text-center">

          <div>
            <h2 className="text-4xl font-extrabold bg-white inline-block px-6 py-2 shadow">{list.no_of_super_raids}</h2>
            <p className="mt-2 text-gray-500 font-semibold">NO OF SUPER RAIDS</p>
          </div>

          <div>
            <h2 className="text-4xl font-extrabold bg-white inline-block px-6 py-2 shadow">{list.super_10s}</h2>
            <p className="mt-2 text-gray-500 font-semibold">SUPER 10S</p>
          </div>

          <div>
            <h2 className="text-4xl font-extrabold bg-white inline-block px-6 py-2 shadow">{list.avg_raid_points}</h2>
            <p className="mt-2 text-gray-500 font-semibold">AVG. RAID POINTS</p>
          </div>

         
        
        </div>
      </div>

      
      <div className="mb-20 flex flex-wrap">
 <div className="flex">
            <div
              className="h-[73px] w-[300px] bg-[#ff4400]"
              style={{ transform: "skew(-15deg)" }}
            >
              <h1 className="text-6xl text-white text-end p-2">
                TACKLES
              </h1>
            </div>
            <div className="h-[73px] w-[15px] bg-[#ff4400] mx-2" style={{ transform: "skew(-15deg)" }}></div>
            <div className="h-[73px] w-[15px] bg-[#ff4400]" style={{ transform: "skew(-15deg)" }}></div>
          </div>


        <div className="flex flex-wrap gap-10 mt-10 text-center">
          <div>
            <h2 className="text-4xl font-extrabold bg-white inline-block px-6 py-2 shadow">{list.no_of_super_tackles}</h2>
            <p className="mt-2 text-gray-500 font-semibold">NO. OF SUPER TACKLES</p>
          </div>

          <div>
            <h2 className="text-4xl font-extrabold bg-white inline-block px-6 py-2 shadow">{list.total_tacle_points}</h2>
            <p className="mt-2 text-gray-500 font-semibold">TOTAL TACKLE POINTS</p>
          </div>


         
        </div>
      </div>

    </div>  
    
    <CarouselPlayer/>


   </div>

      ))}

    
        
    </>
  );
}

export default SinglePlayer;







// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchSinglePlayer } from "../redux/actions/singleplayer.action";
// import CarouselPlayer from "./CarouselPlayer";

// // import Carousel from './CarouselPlayer';



// function SinglePlayer() {
//     const dispatch = useDispatch();
//     const { list_single, loadingps } = useSelector(state => state.singleplayer);
//     console.log(list_single);

//     const { id } = useParams();
//     console.log(id);

//     useEffect(() => {
//         dispatch(fetchSinglePlayer(id));
//     }, [id]);

//     if (loadingps) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <>
//         {list_single.map((list, index) => (
//             <div key={index}>
//                 <div className='flex flex-wrap items-center justify-center w-full h-[600px] bg-[url("/playerbanner.jpg")]'>
//                     <img src={list.profile_image} alt="Profile" className="h-[400px] pr-0 sm:pr-10 md:pr-70 lg:pr-70 " />
//                     <h1 className="font-extrabold text-6xl text-[#ff7500]">{list.name}</h1>
//                 </div>

//                 <div className="flex flex-wrap items-center justify-center mt-20">
//                     <img src={list.full_image} height={400} alt="Full Image" className="pr-0 sm:pr-10 md:pr-70 lg:pr-70 " />
//                     <div>
//                         <div className="flex flex-wrap gap-5">
//                             <div>
//                                 <span className="w-[200px] h-[30px] text-4xl text-white bg-[#ff4400] px-10">JERSEY NO</span>
//                                 <h5 className="text-center font-extrabold mt-5 text-3xl">{list.jersey_no}</h5>
//                             </div>
//                             <div>
//                                 <span className="className='w-[200px] h-[30px] text-4xl text-white bg-[#ff4400] px-10">POSITION</span>
//                                 <h5 className="text-center font-extrabold mt-5 text-3xl">{list.position}</h5>
//                             </div>
//                         </div>

//                         <div className="mt-[200px]">
//                             <span className="w-[200px] h-[30px] text-4xl text-white bg-[#ff4400] px-10">VITALS</span>
//                             <div className="flex flex-wrap justify-between items-center mt-5">
//                                 <h4 className="text-gray-400 text-3xl">NAME</h4>
//                                 <h3 className="text-black text-center font-extrabold text-3xl">{list.name}</h3>
//                             </div>
//                             <div className="flex flex-wrap justify-between items-center mt-5">
//                                 <h4 className="text-gray-400 text-3xl">DATE-OF-BIRTH</h4>
//                                 <h3 className="text-black text-center font-extrabold text-3xl">{list.date_of_birth}</h3>
//                             </div>
//                             <div className="flex flex-wrap justify-between items-center mt-5">
//                                 <h4 className="text-gray-400 text-3xl">NATIONALITY</h4>
//                                 <h3 className="text-black text-center font-extrabold text-3xl">{list.nationality}</h3>
//                             </div>

//                         </div>
//                     </div>
//                 </div>

//                 <div className="w-full bg-[#f2f3f5] py-10">
                    
//                     <h1 className="text-center text-[70px] font-extrabold text-[#ff7500] mb-10">STATISTICS</h1>

//                     <div className="mb-20 flex flex-wrap ">
//                         <div className="flex">
//                             <div className="h-[73px] w-[300px] bg-[#ff4400]"
//                                  style={{ transform: "skew(-15deg)" }}>
//                                 <h1 className="text-6xl text-white text-end p-2">OVERALL</h1>
//                             </div>
//                             <div className="h-[73px] w-[15px] bg-[#ff4400] mx-2" style={{ transform: "skew(-15deg)" }}></div>
//                             <div className="h-[73px] w-[15px] bg-[#ff4400]" style={{ transform: "skew(-15deg)" }}></div>
//                         </div>

//                         <div className="flex flex-wrap gap-10 mt-10 text-center">
//                             <div>
//                                 <h2 className="text-4xl font-extrabold bg-white inline-block px-6 py-2 shadow">{list.Matches_played}</h2>
//                                 <p className="mt-2 text-gray-500 font-semibold">MATCHES PLAYED</p>
//                             </div>

//                             <div>
//                                 <h2 className="text-4xl font-extrabold bg-white inline-block px-6 py-2 shadow">{list.total_ponints_earned}</h2>
//                                 <p className="mt-2 text-gray-500 font-semibold">TOTAL POINTS EARNED</p>
//                             </div>

//                             <div>
//                                 <h2 className="text-4xl font-extrabold bg-white inline-block px-6 py-2 shadow">{list.most_points_in_a_match}</h2>
//                                 <p className="mt-2 text-gray-500 font-semibold">MOST POINTS IN A MATCH</p>
//                             </div>

//                             <div>
//                                 <h2 className="text-4xl font-extrabold bg-white inline-block px-6 py-2 shadow">{list.not_out_percentage}</h2>
//                                 <p className="mt-2 text-gray-500 font-semibold">NOT OUT PERCENTAGE</p>
//                             </div>

//                         </div>
//                     </div>

//                     <div className="mb-20 flex flex-wrap">
//                         <div className="flex">
//                             <div className="h-[73px] w-[300px] bg-[#ff4400]" style={{ transform: "skew(-15deg)" }} >
//                                 <h1 className="text-6xl text-white text-end p-2">RAIDS</h1>
//                             </div>
//                             <div className="h-[73px] w-[15px] bg-[#ff4400] mx-2" style={{ transform: "skew(-15deg)" }}></div>
//                             <div className="h-[73px] w-[15px] bg-[#ff4400]" style={{ transform: "skew(-15deg)" }}></div>
//                         </div>

//                         <div className="flex flex-wrap gap-10 mt-10 text-center">
//                             <div>
//                                 <h2 className="text-4xl font-extrabold bg-white inline-block px-6 py-2 shadow">{list.no_of_super_raids}</h2>
//                                 <p className="mt-2 text-gray-500 font-semibold">NO OF SUPER RAIDS</p>
//                             </div>

//                             <div>
//                                 <h2 className="text-4xl font-extrabold bg-white inline-block px-6 py-2 shadow">{list.super_10s}</h2>
//                                 <p className="mt-2 text-gray-500 font-semibold">SUPER 10S</p>
//                             </div>

//                             <div>
//                                 <h2 className="text-4xl font-extrabold bg-white inline-block px-6 py-2 shadow">{list.avg_raid_points}</h2>
//                                 <p className="mt-2 text-gray-500 font-semibold">AVG. RAID POINTS</p>
//                             </div>

//                         </div>
//                     </div>

//                     <div className="mb-20 flex flex-wrap">
//                         <div className="flex">
//                             <div className="h-[73px] w-[300px] bg-[#ff4400]" style={{ transform: "skew(-15deg)" }} >
//                                 <h1 className="text-6xl text-white text-end p-2">TACKLES</h1>
//                             </div>
//                             <div className="h-[73px] w-[15px] bg-[#ff4400] mx-2" style={{ transform: "skew(-15deg)" }}></div>
//                             <div className="h-[73px] w-[15px] bg-[#ff4400]" style={{ transform: "skew(-15deg)" }}></div>
//                         </div>

//                         <div className="flex flex-wrap gap-10 mt-10 text-center">
//                             <div>
//                                 <h2 className="text-4xl font-extrabold bg-white inline-block px-6 py-2 shadow">{list.no_of_super_tackles}</h2>
//                                 <p className="mt-2 text-gray-500 font-semibold">NO. OF SUPER TACKLES</p>
//                             </div>

//                             <div>
//                                 <h2 className="text-4xl font-extrabold bg-white inline-block px-6 py-2 shadow">{list.total_tacle_points}</h2>
//                                 <p className="mt-2 text-gray-500 font-semibold">TOTAL TACKLE POINTS</p>
//                             </div>

//                         </div>
//                     </div>

//                 </div>

//                 <CarouselPlayer/>

//             </div>
//         ))}
//         </>
//     )
// }

// export default SinglePlayer;