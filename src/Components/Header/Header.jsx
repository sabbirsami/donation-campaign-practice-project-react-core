import { NavLink } from "react-router-dom";
import logo from "../../Images/logo.png";

const Header = () => {
    return (
        <div className="">
            <div className="container mx-auto">
                <div className="py-8 flex items-center justify-between">
                    <img className="w-52" src={logo} alt="" />
                    <nav>
                        <ul className="flex gap-6">
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
