

import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { fetchCategories } from "./redux/actions/category.action"
import { fetchPlayers } from "./redux/actions/players.action"
import { Link } from "react-router-dom"
import Tilt from 'react-parallax-tilt';


function Players() {
    const dispatch=useDispatch()
    const{list,loading}=useSelector((state)=>state.category)
    const{playerByCategory,loadingp}=useSelector((state)=>state.players)
  

    useEffect(()=>{
        dispatch(fetchCategories())
    },[dispatch])

    useEffect(()=>{
        if(list.length>0){
            list.forEach((cat) => {
                dispatch(fetchPlayers(cat.id))
     
            });
        }

    },[dispatch,list])

  return (
    <>

         <div className="player bg-[#edeef2]">
             <div className="ban-sec bg-[url('/player-bannerbg.jpg')] bg-center bg-no-repeat h-[700px] relative bg-cover">
                 <div className="container mx-auto px-[15px]">
                     <div className="row -mx-[15px] flex">
                         <div className="col-md-4 col-md-offset-2 col-xs-12 col-sm-12 no-padd title px-0 lg:ml-[16.6666667%] lg:w-[33.3333333%] lg:flex flex md:w-full">
                             <div className="outer-sec animatedParent table h-[700px] w-full">
                                 <div className="inner-sec table-cell align-middle text-center">
                                     <img src="banner-titleplyrs.png" alt="banner-title" className="mt-auto mr-0 mb-0 ml-auto translate-y-4 animate-[fadeInUpShort_0.6s_ease-out_forwards] block max-w-full h-auto" />
                                     <h1 className="absolute text-[80px] top-[37%] left-[2%] tracking-[10px] font-['Love-Nature'] text-white [text-shadow:-2px_0_24px_#000] leading-[110%] mt-[2.1rem] mb-[1.68rem] font-normal">Players</h1>
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-6 col-xs-12 col-sm-12 no-padd banner-players px-0 lg:ml-[16.6666667%] lg:w-[33.3333333%] lg:flex flex md:w-full">
                             <div className="outer-sec animatedParent  table h-[700px] w-full">
                                 <div className="inner-sec table-cell align-middle text-center">
                                     <img src="players_page_bannerdsktpplyrs.png" alt="players-page-banner" className="mt-auto mr-0 mb-0 ml-auto opacity-100 translate-y-0 animate-[fadeInUpShort_0.6s_ease-out_forwards] block max-w-full h-auto" />
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>

          {list.map((category) => (
        <div key={category.id} className="mt-[110px] mb-[60px]">

          {/* Category header */}
          <div className="flex">
            <div
              className="h-[73px] w-[570px] bg-[#ff4400]"
              style={{transform:"skew(-15deg)",transformOrigin:"top right"}}
            >
              <h1 className="text-6xl text-white text-end p-2">
                {category.cat_name}
              </h1>
            </div>
            <div className="h-[73px] w-[15px] bg-[#ff4400] mx-2" style={{ transform: "skew(-15deg)" }}></div>
            <div className="h-[73px] w-[15px] bg-[#ff4400]" style={{ transform: "skew(-15deg)" }}></div>
          </div>

          {/* Players grid */}
          
          <div className="mx-44 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-6">
  {(playerByCategory[category.id] || []).map((player) => (
    <Link  key={player.id} to={`/players/${player.id}`}>
       <Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05}>
    <div className="flex flex-col items-center justify-center">
      <img data-aos="zoom-in" src={player.profile_image} alt="" width={330} height={350} />

      <h3 className="text-[35px] font-light text-center" style={{fontFamily:"Exo-Bold",fontSize:"35px"}}>
        {player.name}
      </h3>

      

      <h5 className="text-[#ff7500] text-center" style={{fontFamily:"Exo-Regular", fontSize:"20px"}}>
        {category.cat_name}
      </h5>
    </div>
    </Tilt>
    </Link>
  ))}
</div>


        </div>
      ))}







    </>
  )
}

export default Players







// import { useEffect } from "react"
// import { useDispatch,useSelector } from "react-redux"
// import { fetchCategories } from "./redux/actions/category.action"
// import { fetchPlayers } from "./redux/actions/players.action"
// import { Link } from "react-router-dom"
// import Tilt from 'react-parallax-tilt';


// function Playerspg() {

//     const dispatch=useDispatch()
//     const{ list,loading } = useSelector((state) => state.category);
//     const { playerByCategory,loadingpl }=useSelector((state) => state.players)


//     useEffect(() => {
//         dispatch(fetchCategories())
//     },[dispatch])

//     useEffect(() => {
//         if(list.length > 0){
//             list.forEach((cat) => {
//                 dispatch(fetchPlayers(cat.id))
//             });
//         }
//     },[dispatch,list])

//     return(
//         <>
//         <div className="player bg-[#edeef2]">
//             <div className="ban-sec bg-[url('/player-bannerbg.jpg')] bg-center bg-no-repeat h-[700px] relative bg-cover">
//                 <div className="container mx-auto px-[15px]">
//                     <div className="row -mx-[15px] flex">
//                         <div className="col-md-4 col-md-offset-2 col-xs-12 col-sm-12 no-padd title px-0 lg:ml-[16.6666667%] lg:w-[33.3333333%] lg:flex flex md:w-full">
//                             <div className="outer-sec animatedParent table h-[700px] w-full">
//                                 <div className="inner-sec table-cell align-middle text-center">
//                                     <img src="banner-titleplyrs.png" alt="banner-title" className="mt-auto mr-0 mb-0 ml-auto translate-y-4 animate-[fadeInUpShort_0.6s_ease-out_forwards] block max-w-full h-auto" />
//                                     <h1 className="absolute text-[80px] top-[37%] left-[2%] tracking-[10px] font-['Love-Nature'] text-white [text-shadow:-2px_0_24px_#000] leading-[110%] mt-[2.1rem] mb-[1.68rem] font-normal">Players</h1>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-6 col-xs-12 col-sm-12 no-padd banner-players px-0 lg:ml-[16.6666667%] lg:w-[33.3333333%] lg:flex flex md:w-full">
//                             <div className="outer-sec animatedParent  table h-[700px] w-full">
//                                 <div className="inner-sec table-cell align-middle text-center">
//                                     <img src="players_page_bannerdsktpplyrs.png" alt="players-page-banner" className="mt-auto mr-0 mb-0 ml-auto opacity-100 translate-y-0 animate-[fadeInUpShort_0.6s_ease-out_forwards] block max-w-full h-auto" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         {list.map((category) => (
//             <div key={category.id} className="mt-[110px] mb-[60px]">
//                 {/* category_header */}
//                 <div className="flex">
//                     <div className="h-[73px] w-[570px] bg-[#ff4400]" style={{transform:"skew(-15deg)", transformOrigin:"top right"}}>
//                         <h1 className="text-6xl text-white text-end p-2">
//                             {category.cat_name}
//                         </h1>
//                     </div>
//                     <div className="h-[73px] w-[15px] bg-[#ff4400] mx-2" style={{ transform: "skew(-15deg)"}}></div>
//                     <div className="h-[73px] w-[15px] bg-[#ff4400]" style={{ transform: "skew(-15deg)"}}></div>
//                 </div>

//                 {/* players grid */}

//                 <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-6">
//                     {(playerByCategory[category.id] || []).map((players) => (
//                         <Link to={`/players/${players.id}`}>
//                         <Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05} >
//                             <div className="flex flex-col items-center justify-center" key={players.id}>
//                                 <img data-aos="zoom-in" src={players.profile_image} alt="" width={330} height={350} />
//                                 <h3 className="text-[35px] font-light text-center ">{players.name}</h3>

//                                 <h5 className="text-[#ff7500] text-center ">{category.cat_name}</h5>
//                             </div>
//                         </Tilt>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         ))}
//         </>
//     )

// }

// export default Playerspg;