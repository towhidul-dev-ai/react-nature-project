import { FaCartPlus } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import Logo from "../assets/nav-logo.png"


const Navbar = () => {
    return (
        <div className="border-b border-gray-300">
            <nav className="flex justify-between gap-6 max-w-7xl mx-auto py-4 px-4 py-4 ">
                <img src={Logo} className="w-[120px] h-[60px]" alt="" />
                <ul className="flex gap-4 items-center">
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href=""></a>Contact</li>
                    <li><a href="">Services</a></li>
                </ul>

                <div className="flex gap-4 items-center">
                    <IoSearchCircle />
                    <FaCartPlus />
                    <button className="bg-blue-500 text-whitepx-4 py-2 
                    rounded-md hover:bg-blue-600 hover:scale-110 transition-transform duration-300">Login</button>
                    <button className="bg-green-500 text-white px-4 py-2 
                    rounded-md hover: bg-green-600">Signup</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;