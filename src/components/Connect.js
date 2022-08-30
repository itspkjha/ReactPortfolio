import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import svg from '../divider.svg'
const Connect = () => {
    return (
        <div className="w-full md:h-[20%] h-max flex flex-col justify-evenly align-center md:grid md:grid-row-1 md:grid-cols-10  mt-10 custom-font">

            <div className="w-full h-full md:col-span-1">
                {/* left spacing */}
            </div>


            <div className="w-full h-full flex-wrap md:col-span-3 md:pl-12 flex justify-evenly md:flex-col items-start sm:justify-evenly">
                <a href='https://www.linkedin.com/in/paritosh-jha-48693022b/' target='_blank' rel="norefferer"><FiLinkedin size={32} className=" hover:scale-[105%] transition duration-300 ease-in-out" /></a>
                <a href='https://github.com/itspkjha' target='_blank' rel='norefferer'><FiGithub size={32} className=" hover:scale-[105%] transition duration-300 ease-in-out" /></a>
                <a href='https://www.instagram.com/_paritosh.jha_/' target='_blank' rel='norefferer'><FiInstagram size={32} className=" hover:scale-[105%] transition duration-300 ease-in-out" /></a>
            </div>

            {/* <div className="-rotate-90 sm:rotate-0 bg-black  sm:h-[25%]  lg:h-[50%] sm:w-16 md:col-span-2 flex"> */}
            {/* <img src={svg} className="w-full h-full flex items-center justify-center" alt="Divider" /> */}
            {/* </div> */}
            <div className='flex justify-center items-center col-span-2'>
                <div className='w-2 h-36 bg-black -rotate-90 md:rotate-0' />
            </div>


            <a href='mailto:jhaparitosh.542001@gmail.com' className=" -translate-x-[20%] -translate-y-10 md:translate-x-[20%] md:translate-y-0 w-full h-full md:col-span-2 items-center justify-end hidden md:flex">
                <button className="w-max p-5 border-2 border-black aspect-square md:rounded-full flex justify-center items-center text-2xl font hover:bg-black hover:text-white transiton duration-300 ease-in-out">
                    Contact Me
                </button>
            </a>


        </div>
    )
}

export default Connect;