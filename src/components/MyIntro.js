import React from "react";
const MyIntro = () => {
    return (
        <div className=" w-full h-[15%] grid grid-rows-1 grid-cols-6 custom-font">
            <div className=" w-full h-full col-span-1">
                {/* left spacing */}
            </div>

            <div className=" w-full h-full text-3xl col-span-4 flex justify-center items-center pt-2">
                <div className="self-start text-center"><p>Future full-stack Developer / Android Enthusiast</p>
                    <p>A developer on his  path to abstract perfection ╮(.❛ ᴗ ❛.)╭</p>
                </div>
            </div>

            <div className=" w-full h-full col-span-1">
                {/* right spacing */}
            </div>

        </div>
    );
}
export default MyIntro;