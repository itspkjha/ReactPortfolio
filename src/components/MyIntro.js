
const MyIntro = () => {
    return (
        <div className=" w-full h-max md:h-[15%] grid grid-rows-1 grid-cols-6 custom-font">
            <div className=" w-full h-full sm:col-span-1">
                {/* left spacing */}
            </div>

            <div className=" w-full h-full text-[1.2rem] md:text-2xl xl:text-3xl col-span-6 sm:col-span-4 flex justify-center items-center pt-2">
                <div className="self-start text-center"><p>Future full-stack Developer / Android Enthusiast</p>
                    <p>A developer on his  path to abstract perfection. </p>
                    <p>╮(.❛ ᴗ ❛.)╭</p>
                </div>
            </div>

            <div className=" w-full h-full sm:col-span-1">
                {/* right spacing */}
            </div>

        </div>
    );
}
export default MyIntro;