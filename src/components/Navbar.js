import React from "react";
import Button from "./Button";
import '../index.css'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="w-full h-20 pt-4 grid grid-rows-1 grid-cols-10 custom-font">
            <div className="col-span-1">
            </div>

            <div className="col-span-1 w-full h-full flex justify-center items-center">
                {/* button will go here */}
                <Link to='/about'>
                    <Button label="About Me" />
                </Link>
            </div>

            <div className="col-span-2">
            </div>

            <div className="col-span-2 w-full h-full flex items-center justify-center   ">
                {/* logo will go here */}
                <img src={require('../logo.png')} className="w-1/4 aspect-square rounded-full" alt="avatarOp" />
            </div>

            <div className="col-span-2">
            </div>

            <div className="col-span-1 w-full h-full flex justify-center items-center">
                {/* button will go here */}
                <Link to='/skills'>
                    <Button label="Skills" />
                </Link>
            </div>

            <div className="col-span-1">
            </div>


        </div>
    )
}
export default Navbar;