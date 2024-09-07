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
			<div className="flex flex-wrap gap-3 justify-center pt-10">
				<div className="group bg-white px-3 hover:bg-[#aa8453]  transition ease-in-out duration-300  xl:px-8 py-6 flex flex-col justify-center items-center md:w-[155px] xl:w-[230px] "> 
					<GoHome className="text-[#aa8453] group-hover:text-white text-[53px] mb-3"/>
					<h1 className="font-sen text-lg font-bold pb-3 group-hover:text-white">Livign House</h1>
					<p className="text-center text-[#6d7175] group-hover:text-white">Preview Listing of accommdation property living houses</p>
				</div>
				<div className="group bg-white px-3 hover:bg-[#aa8453] hover:text-white transition ease-in-out duration-300  xl:px-8 py-6 flex flex-col justify-center items-center md:w-[155px] xl:w-[230px] ">
					<LiaLandmarkSolid className="text-[#aa8453]  group-hover:text-white text-[53px] mb-3"/>
					<h1 className="font-sen text-lg font-bold pb-3 group-hover:text-white">Solid Land</h1>
					<p className="text-center text-[#6d7175] group-hover:text-white">Hight listed solid use-able land most popular area for development</p>
				</div>
				<div className="group bg-white px-3 hover:bg-[#aa8453] hover:text-white transition ease-in-out duration-300  xl:px-8 py-6 flex flex-col justify-center items-center md:w-[155px] xl:w-[230px] ">
					<PiBuildingOffice className="text-[#aa8453] group-hover:text-white text-[53px] mb-3"/>
					<h1 className="font-sen text-lg font-bold pb-3 group-hover:text-white">Office Floor</h1>
					<p className="text-center text-[#6d7175] group-hover:text-white">Preview most popular area office building listed category</p>
				</div>
				<div className="group bg-white px-3 hover:bg-[#aa8453] hover:text-white transition ease-in-out duration-300  xl:px-8 py-6 flex flex-col justify-center items-center md:w-[155px] xl:w-[230px] ">
					<BsShop className="text-[#aa8453] group-hover:text-white text-[53px] mb-3"/>
					<h1 className="font-sen text-lg font-bold pb-3 group-hover:text-white">Commercial</h1>
					<p className="text-center text-[#6d7175] group-hover:text-white">Listing Commercila property for buisness and factory development</p>
				</div>
				<div className="group bg-white px-3 hover:bg-[#aa8453] hover:text-white transition ease-in-out duration-300  xl:px-8 py-6 flex flex-col justify-center items-center md:w-[155px] xl:w-[230px] ">
					<MdBedroomChild className="text-[#aa8453] group-hover:text-white text-[53px] mb-3"/>
					<h1 className="font-sen text-lg font-bold pb-3 group-hover:text-white">Hostel Room</h1>
					<p className="text-center text-[#6d7175] group-hover:text-white">If you are single looking for single living, preview the hostel listing</p>
				</div>
				<div className="group bg-white px-3 hover:bg-[#aa8453] hover:text-white transition ease-in-out duration-300  xl:px-8 py-6 flex flex-col justify-center items-center md:w-[155px] xl:w-[230px] ">
					<PiBuildingApartmentLight className="text-[#aa8453] group-hover:text-white text-[53px] mb-3"/>
					<h1 className="font-sen text-lg font-bold pb-3 group-hover:text-white">Appartment</h1>
					<p className="text-center text-[#6d7175] group-hover:text-white">For family living appartment, find your best appartment in our director list</p>
				</div>
				<div className="group bg-white px-3 hover:bg-[#aa8453] hover:text-white transition ease-in-out duration-300  xl:px-8 py-6 flex flex-col justify-center items-center md:w-[155px] xl:w-[230px] ">
					<FaWarehouse className="text-[#aa8453] group-hover:text-white text-[53px] mb-3"/>
					<h1 className="font-sen text-lg font-bold pb-3 group-hover:text-white">Condo</h1>
					<p className="text-center text-[#6d7175] group-hover:text-white">In our directory we have listed luxury condo for rent and sale</p>
				</div>
				<div className="group bg-white px-3 hover:bg-[#aa8453] hover:text-white transition ease-in-out duration-300  xl:px-8 py-6 flex flex-col justify-center items-center md:w-[155px] xl:w-[230px] ">
					<FaHouseFloodWater className="text-[#aa8453] group-hover:text-white text-[53px] mb-3"/>
					<h1 className="font-sen text-lg font-bold pb-3 group-hover:text-white">Villa House</h1>
					<p className="text-center text-[#6d7175] group-hover:text-white">Please who like villa house click here this category listed</p>
				</div>
				<div className="group bg-white px-3 hover:bg-[#aa8453] hover:text-white transition ease-in-out duration-300  xl:px-8 py-6 flex flex-col justify-center items-center md:w-[155px] xl:w-[230px] ">
					<MdOtherHouses className="text-[#aa8453] group-hover:text-white text-[53px] mb-3"/>
					<h1 className="font-sen text-lg font-bold pb-3 group-hover:text-white">Hostel Room</h1>
					<p className="text-center text-[#6d7175] group-hover:text-white">The Traveller people can find best hotel here for living night</p>
				</div>
				
			</div>


		

			


		</div>
	);
};

export default PropertyCategories;