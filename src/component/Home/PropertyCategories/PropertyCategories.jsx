import { BsShop } from "react-icons/bs";
import { FaWarehouse } from "react-icons/fa";
import { FaHouseFloodWater } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { LiaLandmarkSolid } from "react-icons/lia";
import { MdBedroomChild, MdOtherHouses } from "react-icons/md";
import { PiBuildingApartmentLight, PiBuildingOffice } from "react-icons/pi";


const PropertyCategories = () => {
	return (
		<div className="px-3 md:px-12 lg:px-16 py-20 bg-[#222222]">
			{/* heading */}
			<div className="text-center w-full lg:w-[490px] xl:w-[640px] mx-auto">
				<h1 className="font-sen font-bold text-4xl text-[#ffffff]">What You Area Looking For?</h1>
				<div className="p-[2px] w-10 my-6  mx-auto  bg-[#aa8453]"></div>
				<p className="text-[17px] font-sen text-[#ffffff]">Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales semper tempor dictum faucibus habitasse.</p>
			</div>

			{/* category */}
			<div className="grid grid-cols-1 md:grid-cols-4 pt-10  lg:grid-cols-5  gap-3 ">
				<div className="bg-white px-3  xl:px-8 py-6 flex flex-col justify-center items-center ">
					<GoHome className="text-[#aa8453] text-[53px] mb-3"/>
					<h1 className="font-sen text-lg font-bold pb-3">Livign House</h1>
					<p className="text-center text-[#6d7175]">Preview Listing of accommdation property living houses</p>
				</div>
				<div className="bg-white px-3  xl:px-8 py-6 flex flex-col justify-center items-center ">
					<LiaLandmarkSolid className="text-[#aa8453] text-[53px] mb-3"/>
					<h1 className="font-sen text-lg font-bold pb-3">Solid Land</h1>
					<p className="text-center text-[#6d7175]">Hight listed solid use-able land most popular area for development</p>
				</div>
				<div className="bg-white px-3  xl:px-8 py-6 flex flex-col justify-center items-center ">
					<PiBuildingOffice className="text-[#aa8453] text-[53px] mb-3"/>
					<h1 className="font-sen text-lg font-bold pb-3">Office Floor</h1>
					<p className="text-center text-[#6d7175]">Preview most popular area office building listed category</p>
				</div>
				<div className="bg-white px-3  xl:px-8 py-6 flex flex-col justify-center items-center ">
					<BsShop className="text-[#aa8453] text-[53px] mb-3"/>
					<h1 className="font-sen text-lg font-bold pb-3">Commercial</h1>
					<p className="text-center text-[#6d7175]">Listing Commercila property for buisness and factory development</p>
				</div>
				<div className="bg-white px-3  xl:px-8 py-6 flex flex-col justify-center items-center ">
					<MdBedroomChild className="text-[#aa8453] text-[53px] mb-3"/>
					<h1 className="font-sen text-lg font-bold pb-3">Hostel Room</h1>
					<p className="text-center text-[#6d7175]">If you are single looking for single living, preview the hostel listing</p>
				</div>
				<div className="bg-white px-3  xl:px-8 py-6 flex flex-col justify-center items-center ">
					<PiBuildingApartmentLight className="text-[#aa8453] text-[53px] mb-3"/>
					<h1 className="font-sen text-lg font-bold pb-3">Appartment</h1>
					<p className="text-center text-[#6d7175]">For family living appartment, find your best appartment in our director list</p>
				</div>
				<div className="bg-white px-3  xl:px-8 py-6 flex flex-col justify-center items-center ">
					<FaWarehouse className="text-[#aa8453] text-[53px] mb-3"/>
					<h1 className="font-sen text-lg font-bold pb-3">Condo</h1>
					<p className="text-center text-[#6d7175]">In our directory we have listed luxury condo for rent and sale</p>
				</div>
				<div className="bg-white px-3  xl:px-8 py-6 flex flex-col justify-center items-center ">
					<FaHouseFloodWater className="text-[#aa8453] text-[53px] mb-3"/>
					<h1 className="font-sen text-lg font-bold pb-3">Villa House</h1>
					<p className="text-center text-[#6d7175]">Please who like villa house click here this category listed</p>
				</div>
				<div className="bg-white px-3  xl:px-8 py-6 flex flex-col justify-center items-center ">
					<MdOtherHouses className="text-[#aa8453] text-[53px] mb-3"/>
					<h1 className="font-sen text-lg font-bold pb-3">Hostel Room</h1>
					<p className="text-center text-[#6d7175]">The Traveller people can find best hotel here for living night</p>
				</div>
				
			</div>


		

			


		</div>
	);
};

export default PropertyCategories;