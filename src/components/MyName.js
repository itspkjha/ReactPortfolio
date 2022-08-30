
const MyName = () => {
    return (
        <div className=" w-full h-[35%] grid grid-rows-1 grid-cols-10 custom-font">
            <div className="w-full h-full sm:col-span-1 ">
                    {/* div for left spacing */}
                </div>

                <div className="w-full h-full col-span-10 sm:col-span-8 text-5xl md:font-normal md:text-7xl xl:text-8xl 3xl:text-2xl flex flex-wrap items-center justify-center text-center">
                    <p className="self-end">Paritosh Kumar Jha</p>
                </div>

                <div className="w-full h-full sm:col-span-1">
                    {/* div for right spacing */}
                </div>
        </div>
    )
}

export default MyName;