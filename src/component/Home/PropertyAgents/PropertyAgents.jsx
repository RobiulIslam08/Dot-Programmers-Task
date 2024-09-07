import { Link } from "react-router-dom";
import luann from "../../../assets/Home/1.jpg"
import ronald from "../../../assets/Home/2.jpg"
import riddle1 from "../../../assets/Home/3.jpg"
import riddle2 from "../../../assets/Home/4.jpg"

const PropertyAgents = () => {
	return (
		<div className="px-3 md:px-12 lg:px-16 py-20">
			{/* heading */}
			<div className="flex items-center justify-between mb-8">
				<p className="font-sen text-4xl font-bold text-[#222222]">Our Listed Property Agents</p>
				<p className="text-[#6d7175] font-sen underline text-[15px] hover:no-underline hover:text-[#AA8453] transform transition duration-100 ease-in-out">
					<Link to="/properties">View All Properties</Link>
				</p>
			</div>

			{/* card desing start */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div>
					<img src={luann} alt="" />
					<div className="flex justify-between items-center pt-6">
						<p className="text-[21px] font-sen">Luann McLawhorn</p>
						<p className="px-[6px] text-[14px] py-1 text-white bg-[#aa8453]">Score: 4.50</p>
					</div>
					<p className="font-barlow pt-1">At 1st April, 2012</p>
				</div>
				<div>
					<img src={ronald} alt="" />
					<div className="flex justify-between items-center pt-6">
						<p className="text-[21px] font-sen">Ronald Johnson</p>
						<p className="px-[6px] text-[14px] py-1 text-white bg-[#aa8453]">Score: 5.00</p>
					</div>
					<p className="font-barlow pt-1">At 1st April, 2012</p>
				</div>
				<div>
					<img src={riddle1} alt="" />
					<div className="flex justify-between items-center pt-6">
						<p className="text-[21px] font-sen">John M. Riddle</p>
						<p className="px-[6px] text-[14px] py-1 text-white bg-[#aa8453]">Score: 5.00</p>
					</div>
					<p className="font-barlow pt-1">At 1st April, 2012</p>
				</div>
				<div>
					<img src={riddle2} alt="" />
					<div className="flex justify-between items-center pt-6">
						<p className="text-[21px] font-sen">John M. Riddle</p>
						<p className="px-[6px] text-[14px] py-1 text-white bg-[#aa8453]">Score: 4.00</p>
					</div>
					<p className="font-barlow pt-1">At 1st April, 2012</p>
				</div>
			
			</div>
		</div>
	);
};

export default PropertyAgents;