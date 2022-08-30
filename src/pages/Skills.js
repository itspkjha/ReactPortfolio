import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useNavigate } from "react-router-dom";
const Pills = ({ label }) => {
    return (
        <h1 className='bg-black text-white px-4 py-3 rounded-lg font-bold mx-2 my-1'>{label}</h1>
    )
}
const Skills = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="md:w-[60%] md:h-[70%] w-[90%] h-[90%] -translate-x-2 relative">
                <span className="z-30 w-full absolute mt-4 font-bold text-center h-20 flex justify-center">~Skills.md <span className='md:flex hidden'>- Portfolio - Paritosh Kumar Jha</span></span>
                <span className="w-full h-full absolute top-0 z-10 bg-white border-2 border-black custom-font p-7 flex justify-center items-start flex-row rounded-sm">
                    <div className="flex flex-col h-full w-full md:items-start md:justify-center md:pt-0 pt-5 mt-5 overflow-y-auto">
                        <h1 className=" w-full text-start text-2xl md:text-4xl">Fundamental Skills</h1>
                        <div className="flex flex-wrap md:w-[50%] w-full mt-2 mb-4">
                            <Pills label="DBMS" />
                            <Pills label="OOPS" />
                            <Pills label="Data Structures and Algorithm" />
                        </div>
                        <h1 className=" w-full text-start text-2xl md:text-4xl">Languages</h1>
                        <div className="flex flex-wrap md:w-[50%] w-full mt-2 mb-4">
                            <Pills label="C" />
                            <Pills label="C++" />
                            <Pills label="JS" />
                            <Pills label="HTML" />
                            <Pills label="CSS" />
                            <Pills label="Dart" />
                        </div>
                        <h1 className=" w-full text-start text-2xl md:text-4xl">Technologies</h1>
                        <div className="flex flex-wrap md:w-[50%] w-full mt-2 mb-4">
                            <Pills label="Tailwind CSS" />
                            <Pills label="Bootstrap" />
                            <Pills label="ReactJS" />
                            <Pills label="Flutter" />
                            <Pills label="Firebase" />
                        </div>
                        <h1 className=" w-full text-start text-2xl md:text-4xl">Tools</h1>
                        <div className="flex flex-wrap md:w-[50%] w-full mt-2 mb-4">
                            <Pills label="Git" />
                            <Pills label="Linux" />
                            <Pills label="VS Code" />
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
export default Skills;