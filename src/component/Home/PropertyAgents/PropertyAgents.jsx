import { Link } from "react-router-dom";


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
		</div>
	);
};

export default PropertyAgents;