import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-white.png"
import { HiMenuAlt3, HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
	return (
		<>
			
			<div className="pb-20 text-white md:px-8 lg:px-16  bg-[#222222]">

			{/* frist nav */}
			<nav className="hidden md:flex justify-between  pt-[10px] font-barlow text-[13px]">
				<div className="flex items-center">
					<IoIosCall className="text-lg "/>
					<p > Need Support ? +1-435-782-4312</p>
				</div>
				<div> 
					<ul className="flex space-x-4">
						<li><Link to="#">About</Link></li>
						<li><Link to="#">Sign Up</Link></li>
						<li><Link to="#">Login</Link></li>
					</ul>
				</div>
			</nav>

			{/* second nav */}
			<nav className="flex items-center justify-between pt-4">
				{/* logo */}
				<div>
					<img src={logo} alt="" />
				</div>

				{/* nav item and button */}
				<div className="">
					{/* nav item for large device */}
					<ul className="lg:flex hidden gap-7 items-center">
						
						<li><Link to = "#">Home +</Link></li>
						<li><Link to = "#">Listing +</Link></li>
						<li><Link to = "#">Features +</Link></li>
						<li><Link to = "#">Pages +</Link></li>
						<li><Link to = "#">Blog +</Link></li>
						<li><Link to = "#">Contact</Link></li>
					
					<button className="bg-[#aa8453] px-[22px] py-[10px] font-sen text-base">+ Create Listing</button>
					</ul>

					{/* nav for small device */}
					<HiOutlineMenuAlt3 className="text-4xl lg:hidden" />
				






				</div>
			</nav>
			</div>


		</>
	);
};

export default Navbar;