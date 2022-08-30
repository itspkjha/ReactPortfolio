import Button from "./Button";
import '../index.css'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="w-full h-20 pt-4 md:grid md:grid-rows-1 md:grid-cols-10 flex justify-evenly items-center custom-font sm:mt-50">
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

            <div className="col-span-2 w-full h-full flex items-center justify-center">
                {/* logo will go here */}
                <img src={require('../logo.png')} className=" w-24 sm:w-1/4 aspect-square rounded-full" alt="avatarOp" />
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