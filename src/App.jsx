
import { Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import AOS from "aos"
import Header from "./components/global/Header"
import Home from "./components/Home"
import Playerspg from "./components/Players"
import Paltanworld from "./components/PaltanWorld"
import Footer from "./components/global/Footer"

import Puneritv from "./components/global/Puneritv"
import Gallery from "./components/global/Gallery"
import SinglePlayer from "./components/global/SinglePlayer"
import SingleGallery from "./components/global/SingleGallery"
import TvList from "./components/global/TvList"


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: "ease-in-out",  
      once: false,    
     
    });
  }, []);

  return (
    <>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/players" element={<Playerspg/>}/>
        <Route path="/paltanworld" element={<Paltanworld/>}/>

        {/* <Route path="/paltanworld/puneri-tv" element={<Puneritv/>}/> */}
        <Route path="/puneritv/:id" element={<Puneritv/>}/>
        <Route path="/paltanworld/puneri-tv" element={<TvList/>}/>
        <Route path="/players/:id" element={<SinglePlayer/>}/>
        <Route path="/paltanworld/gallery" element={<Gallery/>}/>
        <Route path="/paltanworld/gallery/:id" element={<SingleGallery/>}/>
      </Routes>
      <Footer/> 
    </>
  )
}

export default App


