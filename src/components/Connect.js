import {FiGithub,FiLinkedin,FiInstagram} from 'react-icons/fi'
import React from "react";
const Connect = () => {
    return (
        <div className="w-full h-[20%] grid grid-row-1 grid-cols-10 mt-10 custom-font">

            <div className="w-full h-full col-span-1">
                {/* left spacing */}
            </div>


            <div className="w-full h-full col-span-3 pl-12 flex flex-col items-start justify-evenly">
                <a href='https://www.linkedin.com/in/paritosh-jha-48693022b/' target = '_blank'><FiLinkedin size={32} className=" hover:scale-[105%] transition duration-300 ease-in-out" /></a>
                <a href='https://github.com/itspkjha' target = '_blank'><FiGithub size={32} className=" hover:scale-[105%] transition duration-300 ease-in-out"/></a>
                <a href='https://www.instagram.com/_paritosh.jha_/' target = '_blank'><FiInstagram size={32} className=" hover:scale-[105%] transition duration-300 ease-in-out" /></a>
            </div>

            <div className="w-full h-full col-span-2 flex">
            <img src={require('../divider.svg')} className="w-full h-full flex items-center justify-center" alt="Divider" />
            </div>


            <div className="w-full h-full col-span-1">
           
            </div>

            <a href='mailto:jhaparitosh.542001@gmail.com' className="w-full h-full col-span-2 flex items-center justify-end">
                <button className="w-[60%] border-2 border-black aspect-square rounded-full flex justify-center items-center text-2xl font hover:bg-black hover:text-white transiton duration-300 ease-in-out">
                Contact Me
                </button>
            </a>


        </div>
    )
}

export default Connect;