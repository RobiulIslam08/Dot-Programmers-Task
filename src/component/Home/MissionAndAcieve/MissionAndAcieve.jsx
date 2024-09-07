/* eslint-disable react/no-unescaped-entities */

import { IoCheckmarkSharp } from "react-icons/io5";


const MissionAndAcieve = () => {
	return (
		<div className="px-3 md:px-12 lg:px-16 mt-20">
			{/* mission */}
			<div className="flex flex-col space-y-4 lg:flex-row lg:gap-5 xl:gap-16 pb-20">
				{/* first text*/}
				<h1 className="flex-1 md:mb-5 text-[40px] xl:text-[44px] leading-[60px] font-sen font-bold">Our mission is to redefine real estate for the customer's</h1>

				{/* second text*/}
				<div className="flex-1 font-barlow text-[#6d7175]">
					<p className="mb-5">Finderland is one of the world's leading property agents. Our experience spans the globe.</p>
					<p>We have been advising on buying, selling and renting property for over 160 years, from country cottages to city centre offices, agricultural land to new-build developments.</p>
				</div>

				{/* third text*/}
				<div className="flex-1 md:ml-auto md:mt-10 text-[#6d7175] space-y-2 ">
					<div className="flex  gap-2 items-center">
						<div className=" p-[5px] bg-[#f8f5f0] rounded-full"><IoCheckmarkSharp className=" text-[#aa8453]  bg-base-200" /></div>
						<p>Only pay when you publish</p>
					</div>
					<div className="flex  gap-2 items-center">
						<div className=" p-[5px] bg-[#f8f5f0] rounded-full"><IoCheckmarkSharp className=" text-[#aa8453]  bg-base-200" /></div>
						<p>Full featured event app</p>
					</div>
					<div className="flex  gap-2 items-center">
						<div className=" p-[5px] bg-[#f8f5f0] rounded-full"><IoCheckmarkSharp className=" text-[#aa8453]  bg-base-200" /></div>
						<p>Unlimited featured use</p>
					</div>
					<div className="flex  gap-2 items-center">
						<div className=" p-[5px] bg-[#f8f5f0] rounded-full"><IoCheckmarkSharp className=" text-[#aa8453]  bg-base-200" /></div>
						<p>24/7 supports</p>
					</div>
					<div className="flex  gap-2 items-center">
						<div className=" p-[5px] bg-[#f8f5f0] rounded-full"><IoCheckmarkSharp className=" text-[#aa8453]  bg-base-200" /></div>
						<p>Event analytics</p>
					</div>
				</div>
			</div>

			<hr className="pb-20" />

			{/* achieve */}
			<div className="flex lg:flex-row flex-col gap-1 lg:gap-8 pb-16 justify-between">
				<div className="flex gap-5 items-center ">
					<h1 className="text-[44px] text-[#aa8453] font-sen font-bold">$15.4M</h1>
					<p className="text-[#6d7175]"> Owned from <br className="hidden md:flex"/>
						Properties Transactions </p>
				</div>
				<div className="flex gap-5 items-center">
					<h1 className="text-[44px] text-[#aa8453] font-sen font-bold"> 25K+</h1>
					<p className="text-[#6d7175]"> Owned from <br className="hidden md:flex"/>
						Properties Transactions </p>
				</div>
				<div className="flex gap-5 items-center">
					<h1 className="text-[44px] text-[#aa8453] font-sen font-bold">500</h1>
					<p className="text-[#6d7175]"> Owned from <br className="hidden md:flex"/>
						Properties Transactions</p>
				</div>
			</div>
		</div>
	);
};

export default MissionAndAcieve;