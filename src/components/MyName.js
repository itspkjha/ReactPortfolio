import React from "react";
const MyName = () => {
    return (
        <div className="w-full h-[35%] grid grid-rows-1 grid-cols-10 custom-font">
            <div className="w-full h-full col-span-1 ">
                    {/* div for left spacing */}
                </div>

                <div className="w-full h-full col-span-8 text-9xl flex items-center justify-center">
                    <p className="self-end">Paritosh Kumar Jha</p>
                </div>

                <div className="w-full h-full col-span-1">
                    {/* div for right spacing */}
                </div>
        </div>
    )
}

export default MyName;