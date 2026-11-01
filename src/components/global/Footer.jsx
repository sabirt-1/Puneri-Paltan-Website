
import {Row} from "react"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer(){
return (
   <>
    <div className="py-5 px-[190px] flex items-center justify-between bg-black text-white">
  
        <div className="mt-2.5">
            <h6 className="text-[18px] leading-[110%] mt-2 mb-[0.4rem] ">Copyright © 2025 Puneri Paltan</h6>
        </div>
        <div className="flex justify-between items-center ">
            <p className="px-[15px] py-[15px] bg-[#444452] rounded-3xl w-[50px] h-[50px] text-black mr-4 text-[22px] transition-all duration-500 ease-in-out hover:bg-[#ff7500] hover:text-[white]"><FaFacebookF/></p>
            <p className="px-[15px] py-[15px] bg-[#444452] rounded-3xl w-[50px] h-[50px] text-black mr-4 text-[22px] transition-all duration-500 ease-in-out hover:bg-[#ff7500] hover:text-[white]"><FaTwitter/></p>
            <p className="px-[15px] py-[15px] bg-[#444452] rounded-3xl w-[50px] h-[50px] text-black mr-4 text-[22px] transition-all duration-500 ease-in-out hover:bg-[#ff7500] hover:text-[white]"><FaInstagram/></p>
            <p className="px-[15px] py-[15px] bg-[#444452] rounded-3xl w-[50px] h-[50px] text-black mr-4 text-[22px] transition-all duration-500 ease-in-out hover:bg-[#ff7500] hover:text-[white]"><FaYoutube/></p>
        </div>
        <div className="flex "> 
            <div className="">
                <p className="bg-[#ff7500] mb-1 text-xs px-1 my-3 mx-0.5 rounded">Managed</p>
                <p className="bg-[#ff7500] mb-1 text-xs px-1  rounded text-right">By</p>
            </div>
            <img src="dllogo.png" alt="" className="inline-block align-middle w-[120px] ml-[5px] p-3"/>
        </div>
   
    </div>
   </>
)
}
export default Footer