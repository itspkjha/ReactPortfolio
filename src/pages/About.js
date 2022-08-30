import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useNavigate } from "react-router-dom";
const About = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full h-screen flex justify-center items-center">

            <div className="w-[80%] h-[75%] relative">
                <span className="z-30 w-full absolute mt-4 font-bold text-center h-20 flex justify-center">~About.md <span className='md:flex hidden'>- Portfolio - Paritosh Kumar Jha</span> </span>
                <span className="w-full h-full absolute top-0 z-10 bg-white border-2 border-black custom-font p-7 flex justify-end rounded-sm md:flex-row flex-col">
                    <div className='w-full md:h-full h-[90%] overflow-y-auto md:flex'>
                        <div className="md:flex md:flex-col md:h-full md:w-[60%] md:items-start md:justify-center">
                            <h1 className=" w-full text-start md:text-6xl text-xl font-bold">About Me</h1>
                            <p className="md:text-2xl w-full mt-5 md:text-start text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="h-full md:flex hidden  justify-center items-center w-[30%]">
                            <img src={require('../logo.png')} alt="logo-img" className=" w-full aspect-square rounded-full" />
                        </div>
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