import { FaCaretRight } from "react-icons/fa";
import Loading from "./global/Loading";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import { fetchPlayersByCat } from "./redux/actions/singleplayer.action";
// import { fetchSinglePlayer } from "./redux/actions/singleplayer.action";
import { fetchPlayers } from "./redux/actions/players.action";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./PlayersSwiper.css"; 
// import Footer from "./global/Footer";
// import Players from "./Slider";
// import Slider from "./Slider";
// import CarouselPlayer from "./global/CarouselPlayer";


function Home(){

  const dispatch=useDispatch();
  const {playerByCategory,loadingp}=useSelector((s)=>s.players);
//   const totalPlayers=10;
  const apiPlayers = Object.values(playerByCategory || {}).flat();
  useEffect(() => {
    [1, 2, 3].forEach((cat) => {
      dispatch(fetchPlayers(cat));
    });
  }, [dispatch]);
//   useEffect(()=>{
//   if (apiPlayers.length < totalPlayers) {
//             const cachedIds = Object.keys(playerByCategory);
//             for (let id = 1; id <= totalPlayers; id++) {
//                 if (!cachedIds.includes(String(id))) {
//                     // dispatch(fetchSinglePlayer(id));
//                     useEffect(() => {
//                         [1, 2, 3].forEach((cat) => dispatch(fetchPlayers(cat)));
//                     }, [dispatch]);
//                 }
//             }
//         }
//     }, [dispatch, playerByCategory, totalPlayers]);




    // const { playerByCategory, loadingp } = useSelector((state) => state.players);

    // const apiPlayers = Object.values(playerByCategory || {}).flat();

    return(
        <>
        <div>
            <div className="bg-[url('/banner1.webp')] h-screen w-full bg-no-request bg-cover bg-contain">
            </div>

            {/* <div className="relative bg-[url('/descripbgnew.jpg')] bg-cover bg-position[30%_20%] bg-no-repeat h-screen w-full">
            //  dark overlay so text pops like your screenshot 
            <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

            <div className="container mx-auto px-[15px] h-full relative z-10">
                <div className="relative min-h-px w-full">

                //  centered vertical line 
                <div className="absolute left-1/2 top-[17%] -translate-x-1/2 h-[210px] w-0.5 bg-white z-30"></div>

                //  SCROLL text above the line, spaced letters 
                <p
                    className="absolute left-1/2 top-[8%] -translate-x-1/2 z-40 text-white text-3xl font-light tracking-[64px]"
                    style={{ letterSpacing: '64px' }}    
                    // you can keep both tracking and inline style if you like 
                >
                    SCROLL
                </p>

                //  main content area — bottom aligned 
                <div className="h-full flex items-end">
                    <p className="text-[#ff7500] text-[50px] leading-[1.3] text-justify py-[30px] px-[50px] font-exoBold max-w-[900px]">
                    Puneri Paltan is currently one of the top performing teams in the Pro Kabaddi League. 
                    With a mix of unstoppable energy, honed-out skills and steely nerves, here's a force that 
                    consistently looks forward to perform better, challenge its opponents and make a difference.
                    </p>
                </div>

                </div>
            </div>
            </div> */}

{/* //description sec */}
            <div className="bg-[url('/descripbgnew.jpg')] h-screen w-full bg-no-request bg-center bg-cover bg-no-repeat relative pb-400">
            <div className="container mx-auto px-[15px] ">
                <div className="row -mx-[15px]">
                    <div className="relative min-h-px px-[15px] w-full">
                        {/* <div className="line absolute h-[210px] top-[17%] w-0.5 bg-white left-1/2 translate-x-1/2 z-9 text-white"> */}
                             <p className="text-white text-center text-3xl font-light pt-8 absolute left-[53%] top-[10%] -translate-x-1/2" style={{letterSpacing:'64px'}}>SCROLL</p>
                             <div className=" h-screen w-full table-cell align-bottom text-center">
                                <p className="bg-cover bg-position[30%_20%] text-[50px] text-justify leading-[1.3] py-[190px] px-[30px] font-exoBold relative text-[#ff7500]" style={{fontFamily:"exobold"}}>
                                    Puneri Paltan is currently one of the top performing teams in the Pro Kabaddi League. 
                                    With a mix of unstoppable energy, honed-out skills and steely nerves, here's a force that 
                                    consistently looks forward to perform better, challenge its opponents and make a difference.
                                </p>
                             </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>

{/* // players display  slider */}

            <div className="players-section">
                <div className="play flex md:justify-center items-center w-full gap-4 px-4">
                  <div className="title w-[20%]">
                    <h2>Players</h2>
                  </div>
                {loadingp && apiPlayers.length === 0 ? <Loading/> : null}
                <div className="w-[80%] min-h-[300px]">
                  <div className="w-full  h-100 swip" >
                  <Swiper
                    style={{height:"100%"}}
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    loop={apiPlayers.length > 4}
                    autoplay={{ delay: 6000 }}
                    spaceBetween={20}
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      480: { slidesPerView: 2 },
                      768: { slidesPerView: 3 },
                      1024: { slidesPerView: 4 },
                    }}
                  >
                    {loadingp && <Loading/>}
                    {apiPlayers.length === 0 ? (
                  <SwiperSlide>
                    <div className="player-card">
                      <p>No players available</p>
                    </div>
                  </SwiperSlide>
                  ) :(
                    apiPlayers.map((player, index) => (
                      <SwiperSlide key={player.id} className="player-slide">
                        <div className="player-card">
                          <img src={player.profile_image} alt={player.fname} className="player-img" />
            
                          <div className="name">
                            <h2>{player.name}</h2>
                            <h3>{player.lname}</h3>
                            <p className="role">{player.position}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    )))}
                  </Swiper>
                  </div>
                  </div>
                  </div>
                </div>
                <Link to={'/players'}>
                <div className="flex items-center align-middle justify-center w-full">
                  {/* <button className="w-40 bg-[linear-gradient(to_right,#df3100_0,#ff7500_100%)] text-2xl text-white -skew-x-12">
                    <span className="p-5">Enter</span></button> */}
                    <button className="btn default-btn btn-hover color-4
                                bg-[linear-gradient(to_right,#df3100_0%,#ff7500_25%,white_50%,#ff7500_75%,#df3100_100%)]
                                bg-[length:300%_100%]
                                transition-all
                                duration-500
                                hover:bg-[position:100%_0]
                                text-white
                                px-6
                                py-3
                                font-semibold
                                tracking-[3px]
                                skew-x-[-15deg]
                                bg-[length:300%_100%]
                                transition-all
                                duration-400
                                ease-in-out
                                border-0
                                px-[30px]
                                py-2
                                w-[280px]
                                rounded-none
                                text-[20px]
                                text-white
                                font-['Exo-SemiBold']
                                relative
                                z-999" style={{fontFamily:""}}>Enter</button>
                </div>
                </Link>

            {/* <Players/> //wrong input*/}
            {/* <Slider/> */}
            {/* <CarouselPlayer/> */}

            </div>
            <div className="bg-[url('/fixtures-bg_pp.jpg')] bg-center bg-repeat h-auto pt-[220px]">
            <div className="p_world xl2:h-auto bg-[url('/puneri-world-bg.jpg')] bg-bottom bg-no-repeat h-auto relative z-9">
                <div className="container-f mx-auto px-[15px]">
                    <div className="row -mx-[15px]">
                        <div className="col-md-12 col-xs-12 col-sm-12 no-padd mt-9 animatedParent animateOnce relative min-h-px align-baseline">
                            <img src="paltan-world-homepage.png" alt="paltan-world-homepage" className="opacity-100 translate-y-0 relative z-9 "/>
                            <div className="animatedParent absolute top-[38%] right-[27%] translate-x-1/2 z-9 ">
                                <h2 className="animated slow fadeInDownShort go opacity-100 translate-y-0 font-love-nature text-[110px] tracking-[7px] m-0 text-[#ff7500] ">PALTAN</h2>
                                <h2 className="animated slow fadeInUpShort go opacity-100 translate-y-0 -mt-[10%]! ml-[7%]! text-white! font-love-nature text-[110px]! tracking-[7px] m-0">WORLD</h2>
                                <a href="">
                                    
                                    <button className="
                                        cursor-default float-right bg-[linear-gradient(to_right,#df3100_0%,#ff7500_25%,white_50%,#ff7500_75%,#df3100_100%)] bg-size-[300%_100%] hover:bg-position-[100%_0] transition-all duration-400 ease-in-out

                                        tracking-[3px] skew-x-[-15deg] border-0 py-2 px-[30px] w-[280px] rounded-none text-[20px] text-white font-['Exo-SemiBold']

                                        relative z-999 inline-block mb-0 font-normal text-center align-middle touch-manipulation whitespace-nowrap leading-[1.42857143] select-none
                                    "
                                    >
                                    Enter
                                    </button>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="news bg-[url('/news-bg.jpg')] bg-center bg-no-repeat h-auto relative pt-[150px] pb-[150px]">
                <div className="container_n mx-auto px-[15px] bg-[url('/news-banner.jpg')] bg-center bg-no-repeat h-[561px] mb-[50px] relative">
                    <div className="row -mx-[15px]">
                        <div className="col-md-12 col-xs-12 col-sm-12 no-padd px-0">
                            <div className="outer-sec table h-[561px] w-full">
                                <div className="inner-sec animatedParent table-cell align-middle text-center">
                                    <h2 className="animated slow fadeInDownShort go text-[90px] text-center pt-0 mb-[-3%] -translate-y-5 font-[Love-Nature] 
                                    tracking-[7px] m-0 text-[#ff7500] leading-[1.1] font-normal" style={{animationDuration: "1.5s", animationFillMode: "both",}}>PUNERI PALTAN</h2>
                                    <h2 className="subhead animated slow fadeInUpShort go text-[90px] text-center text-white mt-5 pt-0 mb-[-3%] tracking-[7px] m-0 font-[Love-Nature] leading-[1.1] font-normal opacity-100 translate-y-0 " style={{ animationDuration: "1.5s", animationFillMode: "both",}}>in the NEWS</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xs-12 button relative
                                        min-h-px
                                        text-center
                                        px-[15px]
                                        mt-[-25px]

                                        sm:px-4
                                        sm:mt-[-20px]

                                        md:px-6
                                        md:mt-[-15px]

                                        lg:px-8
                                        lg:mt-[-10px]">
                            <a href="#">
                                <button className="btn default-btn btn-hover color-4
                                bg-[linear-gradient(to_right,#df3100_0%,#ff7500_25%,white_50%,#ff7500_75%,#df3100_100%)]
                                bg-[length:300%_100%]
                                transition-all
                                duration-500
                                hover:bg-[position:100%_0]
                                text-white
                                px-6
                                py-3
                                font-semibold
                                tracking-[3px]
                                skew-x-[-15deg]
                                bg-[length:300%_100%]
                                transition-all
                                duration-400
                                ease-in-out
                                border-0
                                px-[30px]
                                py-2
                                w-[280px]
                                rounded-none
                                text-[20px]
                                text-white
                                font-['Exo-SemiBold']
                                relative
                                z-999" style={{fontFamily:""}}>Enter</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel owl-theme hidden w-full relative z-1 tap-highlight-transparent"></div>
            </div>

{/* Subscribe_sect */}
            <div className="subscribe-section bg-[#ff7500] h-[100px] relative w-90% mx-auto mt-[-50px] border-0 shadow-inset_0_0_0_rgba(255,255,255,0.15),_0_1px_5px_rgba(0,0,0,0.075) -skew-x-12 w-full md:w-[90%] ">
                <div className="container mx-auto px-[15px]">
                    <div className="row -mx-[15px] flex">
                        <div className="col-md-6 col-xs-12 col-sm-4 no-padd animatedParent title mb-4 text-center skew-x-15deg px-0 relative min-h-px flex items-center justify-center">
                            <h3 className="animated growIn font-loveNature text-white text-[28px] tracking-[2px] leading-[110%] font-normal py-8">subscribe to our newsletter</h3>
                        </div>
                        <div className="col-md-4 col-xs-10 col-xs-offset-1 col-sm-offset-0 col-md-offset-0 col-sm-4 no-padd animatedParent mail-box px-0 relative min-h-px flex items-center">
                            <form className="subscribe-form" action="#" method="POST">
                                <input type="hidden" value={'P6YN5OUzPH2TptqDDoDCjsUxg9pZGAB5xr4z4ik0'} />
                                <div className="row -ml-[15px] -mr-[15px] flex">
                                    <div className="col-md-10 col-sm-10 col-xs-8 email-field -mt-2 ml-20 bg-white">
                                        <input type="email"
                                        placeholder="Enter your email-id"
                                        className="
                                            w-full
                                            h-48px
                                            bg-white
                                            border-0
                                            rounded-none
                                            outline-none
                                            shadow-none
                                            px-24
                                            py-3
                                            text-base
                                            text-gray-700
                                            skew-x-15deg
                                            transition-all
                                            duration-300
                                            font-exo
                                        " />
                                    </div>
                                    <div className="col-md-2 col-sm-2 col-xs-2 submit-btn -mt-2 skew-x-15deg relative min-h-px px-[15px]">
                                        <button className="btn default-btn btn-hover color-4  inline-block
                                            px-[15px] py-[13px]
                                            w-auto
                                            bg-[linear-gradient(to_right,#df3100_0%,#ff7500_100%)]
                                            tracking-[3px]
                                            skew-x-[-15deg]
                                            bg-length:300%_100%
                                            transition-all
                                            duration-400ms
                                            ease-in-out
                                            border-0
                                            rounded-none
                                            text-[20px]
                                            text-white
                                            font-['Exo-SemiBold']
                                            relative
                                            z-999
                                            mb-0
                                            font-normal
                                            text-center
                                            align-middle
                                            touch-manipulation
                                            cursor-pointer
                                            whitespace-nowrap
                                            leading-[1.42857143]
                                            select-none hover:bg-position:100%_0" type="submit">Go</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <p id="contact_msg"></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

{/* partners_sect */}
            <div className="partners-section pb-[100px]">
                <div className="container mx-auto px-[15px]">
                    <div className="row -mx-[15px]">
                        <div className="col-md-12 col-xs-12 col-sm-12 no-padd animatedParent px-0 relative min-h-px">
                            <h2 className="animated growIn text-center py-[30px] font-['Love-Nature'] text-[110px] tracking-[7px] m-0 text-[#ff7500] leading-[110%] font-normal" style={{ fontFamily:""}}>Partners</h2>
                        </div>
                    </div>
                    <div className="row footer-logo-grid -mx-[15px] flex justify-center">
                        <div className="col-md-2 col-xs-12 col-sm-6 partners-logos -mx-[15px] min-h-px px-[15px] flex flex-wrap relative pt-[30px] justify-center w-full sm:w-1/2 md:w-1/6">
                            <div>
                                <a href="#">
                                    <img src="/force_motors.png" alt="Force Motors" className="img-responsive mx-auto block max-w-full h-auto " />
                                    <h6 className=" font-['Exo-Light'] text-[16px] text-black text-center tracking-[2px] m-0 pt-5 leading-[110%] font-normal" style={{ fontFamily:"Exo-Light"}}>Principal Partner</h6>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-logo-grid -mx-[15px] flex justify-center">
                        <div className="col-md-2 col-xs-12 col-sm-6 partners-logos relative min-h-px px-[15px] pt-[30px] flex flex-wrap w-full lg:w-1/6 ">
                            <div>
                                <a href="#">
                                    <img src="/stihl-logo.png" alt="" className="img-responsive  mx-auto block max-w-full h-auto " />
                                    <h6 className=" font-['Exo-Light'] text-[16px] text-black text-center tracking-[2px] m-0 pt-5 leading-[110%] font-normal" style={{ fontFamily:"Exo-Light"}}>Associate-Partner</h6>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-xs-12 col-sm-6 partners-logos relative min-h-px px-[15px] pt-[30px] flex flex-wrap w-full lg:w-1/6 ">
                            <div>
                                <a href="#">
                                    <img src="/navitas_sponsor.webp" alt="Navitas Solar" className="img-responsive  mx-auto block max-w-full h-auto " />
                                    <h6 className=" font-['Exo-Light'] text-[16px] text-black text-center tracking-[2px] m-0 pt-5 leading-[110%] font-normal" style={{ fontFamily:"Exo-Light"}}>Associate-Partner</h6>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-logo-grid  -mx-[15px] flex justify-center">
                        <div className="col-md-2 col-xs-12 col-sm-6 partners-logos  -mx-[15px] min-h-px px-[15px] flex flex-wrap relative pt-[30px] justify-center w-full sm:w-1/2 md:w-1/6">
                            <div>
                                <a href="#">
                                    <img src="/paras.webp" alt="Paras  Buildtech" className="img-responsive mx-auto block max-w-full h-auto" />
                                    <h6 className=" font-['Exo-Light'] text-[16px] text-black text-center tracking-[2px] m-0 pt-5 leading-[110%] font-normal" style={{ fontFamily:"Exo-Light"}}>Co-Partner</h6>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-logo-grid  -mx-[15px] flex justify-center">
                        <div className="col-md-2 col-xs-12 col-sm-6 partners-logos  -mx-[15px] min-h-px px-[15px] flex flex-wrap relative pt-[30px] justify-center w-full sm:w-1/2 md:w-1/6">
                            <div>
                                <a href="#">
                                    <img src="/better.webp" alt="Bellteralt Logo" className="img-responsive mx-auto block max-w-full h-auto" />
                                    <h6 className=" font-['Exo-Light'] text-[16px] text-black text-center tracking-[2px] m-0 pt-5 leading-[110%] font-normal" style={{ fontFamily:"Exo-Light"}}>Wellness Partner</h6>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-logo-grid  -mx-[15px] flex justify-center">
                        <div className="col-md-2 col-xs-12 col-sm-6 partners-logos  -mx-[15px] min-h-px px-[15px] flex flex-wrap relative pt-[30px] justify-center w-full sm:w-1/2 md:w-1/6">
                            <div>
                                <a href="#">
                                    <img src="/shivnaresh-logo.webp" alt="Shivnaresh Logo" className="img-responsive mx-auto block max-w-full h-auto" />
                                    <h6 className=" font-['Exo-Light'] text-[16px] text-black text-center tracking-[2px] m-0 pt-5 leading-[110%] font-normal" style={{ fontFamily:"Exo-Light"}}>Kit Partner</h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


{/* // ticket sec */}
            <div className="mr-auto ml-auto pl-[180px] pr-40 absolute -bottom-374">
                <div className="px-0 h-[420px] w-full z-99 mb-[-23%] " style={{transform:"skew(-15deg)", paddingBottom:"10px"}}>
                    <a href="https://www.district.in/events/pkl-2025-chennai-team">
                    <div className="w-[45%] h-full inline-block bg-[#2b2521]  " style={{boxshadow:"inset_0_0_0_rgba(255,255,255,0.15),_0_0_26px_rgba(0,0,0,0.63)", overflow:"hidden"}}>
                        <div className="relative top-[25px]" style={{transform:"skew(-15deg)"}}>
                            <img src="ticketp1.png" alt="Puneri Paltan Jersey and logo"  className="relative right-0 top-[-11%] block max-w-full h-auto" style={{transform:"skew(28deg)", maxWidth:"100%"}}/>
                        </div>
                    </div>
                    </a>
                    {/* <a href=""> */}
                        <div className="w-1/2 h-full -ml-3 inline-block bg-black " style={{boxShadow:"inset_0_0_0_rgba(255,255,255,0.15),_0_0_26px_rgba(0,0,0,0.63)"}}>
                            <img src="tickets.png" alt="Puneri Paltan Match Tickets" className="relative top-20 left-14" style={{transform:"skew(15deg)"}}/>
                        </div>
                    {/* </a> */}
                    <div className="border-white relative top-20px">
                        <a href="https://www.district.in/events/pkl-2025-chennai-team">
                        <button className="px-8 py-3 bg-[#ff7500] text-white flex border-white absolute -top-60 right-180 " style={{fontSize:"24px", border:"2px solid #fff",borderLeft:"0"}}>
                            Buy Tickets 
                            <i className="mt-2 ml-1.5"><FaCaretRight /></i>
                        </button>
                        </a>
                    </div>
                </div>
            </div>

{/* 
            <div className='flex items-center justify-center bg-[url("/fixtures-bg.jpg")] ' style={{transform:'skewx(-15deg)'}} >
                <div className='bg-black flex  w-[1100px]' >
                <div className='relative'><img src="ticketp1.png" alt=""  style={{transform:'skewx(15deg)'}}/>
                <a href="https://www.district.in/events/pkl-2025-chennai-team"><button className='text-white absolute right-10 top-55 border-2 border-white border-l-0  bg-orange-400 h-15 w-50'>Buy Tickets</button></a>
                </div>
                <div className='pt-20'><img src="tickets.png" alt="" style={{transform:'skewx(15deg)'}}/></div>
                </div> 
            </div> */}

           
           
        </div>
        
       
        </>
    )
}

export default Home