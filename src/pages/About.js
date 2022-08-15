import React from "react";
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useNavigate } from "react-router-dom";
const About = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full h-screen flex justify-center items-center">

            <div className="w-[80%] h-[75%] relative">
                <span className="z-30 w-full absolute mt-4 font-bold text-center h-20">~About.md - Portfolio - Paritosh Kumar Jha</span>
                <span className="w-full h-full absolute top-0 z-10 bg-white border-2 border-black custom-font p-7 flex justify-center items-start flex-row rounded-sm">
                    <div className="flex flex-col h-full w-[60%] items-start justify-center">
                        <h1 className=" w-full text-start text-6xl font-bold">About Me</h1>
                        <p className="text-2xl w-full mt-5 text-start"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="h-full flex justify-center items-center w-[30%]">
                        <img src={require('../logo.png')} alt="logo-img" className=" w-full aspect-square rounded-full" />
                    </div>
                </span>

                {/* span for shadow */}
                <span className="w-full h-full absolute mt-6 ml-6 top-0 -z-10 bg-black" />
                <span className=" z-50 relative top-0 w-full h-max p-5 flex justify-end">
                    <button onClick={() => {
                        navigate(-1);
                    }}>
                        <IoIosCloseCircleOutline size={24} className=" hover:scale-[115%] transition duration-200 ease-in-out" />
                    </button>
                </span>
            </div>
        </div>
    )
}
export default About;