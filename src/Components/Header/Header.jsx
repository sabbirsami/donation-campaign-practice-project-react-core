import { NavLink } from "react-router-dom";
import logo from "../../Images/logo.png";

import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="">
            <div className="container mx-auto">
                <div className="py-8 flex items-center justify-between">
                    <img className="w-52" src={logo} alt="" />
                    <nav>
                        <AiOutlineMenu
                            onClick={() => setOpen(!open)}
                            className="md:hidden flex text-3xl font-light m-3"
                        />
                        <ul
                            className={`${
                                open ? "" : "hidden"
                            } md:flex flex-row md:relative absolute md:ms-0 -ms-28 md:bg-transparent ease-in-out duration-300 bg-white p-10 gap-6`}
                        >
                            <li>
                                <NavLink to={"/"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/donations"}>Donation</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/statistics"}>Statistics</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
