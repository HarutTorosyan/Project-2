 import React from "react";
 import FooterLogo from "../../assets/img/footerlogo.png";
 import { Link } from "react-router-dom";
 export default function Footer() {
 
    return(
<div className="w-full bg-gray-50 mt-40 pt-10 md:pt-14  lg:pt-5 pb-5 relative">
    <div className="max-w-screen-xl mx-auto flex text-black font-monter max-lg:flex-col lg:px-4  items-center justify-between ">  
    
    <Link to={""}>
            <img src={FooterLogo} className="w-10" alt="" />
          </Link>
          <p>© Rokstar 2023, Made with 
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="inline text-red-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z">

                </path>
          </svg> By Divergent Studio.
          </p>
     </div>
     
    
      <button class="absolute left-1/2 -top-[35px] -translate-x-1/2 bg-white w-14 md:w-[70px] h-14 md:h-[70px] rounded-full text-center shadow-scroll-top">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="inline text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z">
        </path>
        </svg>
        </button>
   
     </div>
    
    )
}