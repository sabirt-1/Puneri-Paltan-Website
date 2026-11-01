
const Blockele=({title ,translate="10",translateLine="10",width="1/3"})=>{
    return(
        <>
        <div className="flex w-5/6 h-20 pt-4">
        <div className={`w-full p-5 md:w-${width}  `} style={{padding:"10px",backgroundColor:"#f40",  transform: window.innerWidth >= 568 
            ? `skewX(-20deg) translateX(-${translate}px)`   
            : `none`                 
        }}>
        <h2 className="p-2 text-sm lg:text-xl xl:text-2xl text-center md:text-end uppercase text-white" style={{marginBottom:12,padding:"15px"}} data-aos="fade-right">{title}</h2>
        </div>
        <div className="relative after:content-[''] after:block after:bg-[#f40] after:w-2.5 after:h-full after:mx-[3px]" style={{transform: window.innerWidth >= 568 
            ? `skewX(-20deg) translateX(-${translate}px)`   
            : `none`                 
        }}></div>
        <div className="relative after:content-[''] after:bg-[#f40] after:w-[7px] after:h-full after:ml-[3px] after:block" style={{transform: window.innerWidth >= 568 
            ? `skewX(-20deg) translateX(-${translate}px)`   
            : `none`                 
        }}></div>
        </div>
        </>
    )
}
export default Blockele;