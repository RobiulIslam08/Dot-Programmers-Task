
import propertyImageOne from "../../../assets/Home/property-grid-1.png"
import propertyImageTwo from "../../../assets/Home/property-grid-2.png"
import propertyImageThree from "../../../assets/Home/property-grid-3.png"
import propertyImageFour from "../../../assets/Home/property-grid-4.png"
import aliTufan from "../../../assets/Home/1.jpg"
import { MdAreaChart, MdLocationPin } from "react-icons/md";
import { FaBath, FaBed, FaBuilding, FaFireAlt, FaSearchPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';
import 'animate.css';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const RecentProperties = () => {
	return (
		<div className="px-3 md:px-12 lg:px-16 py-20 bg-[#f8f5f0]">
			{/* heading */}
			<div className="flex items-center justify-between mb-8">
				<p className="font-sen text-4xl font-bold text-[#222222]">Recent Properties</p>
				<p className="text-[#6d7175] font-sen underline text-[15px] hover:no-underline hover:text-[#AA8453] transform transition duration-100 ease-in-out">
					<Link to="/properties">View All Properties</Link>
				</p>
			</div>

			{/* slider */}
			<Swiper
				spaceBetween={30}
				pagination={{ clickable: true }}
				modules={[Pagination]}
				breakpoints={{
					640: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 3,
					},
				}}
				className="mySwiper"
			>

				<SwiperSlide>
					<div className="w-[310px] overflow-hidden  md:w-[300px] xl:w-[380px] mb-10 bg-[#ffffff]">
						{/* image */}
						<div className="relative">
							<img src={propertyImageOne} className="hover:scale-105   duration-500 transition-transform  " alt="" />
							<p className="bg-[#222222] absolute top-3 left-3 text-white text-xs font-barlow px-2 py-1">For Sale</p>
							<div className="flex items-center  absolute bottom-6 left-3">
								<FaBuilding className="text-[#aa8453]" />
								<p className="text-white font-barlow">APARTMENT</p>
							</div>
							<div className="absolute right-4 bottom-4 flex gap-2">
								<div className="w-10 h-10 flex items-center justify-center bg-[#1f1f1f] text-white"><FaArrowRightArrowLeft /></div>
								<div className="w-10 h-10 flex items-center justify-center bg-[#1f1f1f] text-white"><CiHeart /></div>
								<div className="w-10 h-10 flex items-center justify-center bg-[#1f1f1f] text-white"><FaSearchPlus /></div>
							</div>
						</div>
						{/* text */}
						<div className="p-6">
							<h1 className="text-[#aa8453] font-sen font-bold text-[21px]">$1850 <span className="text-[14px] text-[#6d7175]">(monthly)</span></h1>
							<p className="text-[#12171f] font-sen text-lg font-medium py-1">Family House Residence</p>
							{/* location div */}
							<div className="flex text-[#6d7175] text-[14px]  items-center font-barlow">
								<MdLocationPin className="text-[#aa8453]" />
								<p>4213 South Burlingtion, VT 05403</p>
							</div>

							{/* itmes */}
							<div className="flex gap-4 pt-4 pb-8 text-[#6d7175] text-[15px] font-barlow">
								<div className="flex gap-2 items-center">
									<FaBed />
									<p>7</p>
								</div>
								<div className="flex gap-2 items-center">
									<FaBath />
									<p>5</p>
								</div>
								<div className="flex gap-2 items-center">
									<MdAreaChart />
									<p>1200 Sqft</p>
								</div>
								<div className="flex gap-2 items-center">
									<FaFireAlt />
									<p>Yes</p>
								</div>
							</div>

							<hr />

							{/* profile */}
							<div className="flex justify-between items-center pt-3 text-[#6d7175] font-barlow">
								<div className="flex gap-3 items-center">
									<img src={aliTufan} className="w-10 h-10 rounded-full" alt="" />
									<p className="hover:underline">Ali Tufan</p>
								</div>
								<p>2 Month Ago</p>
							</div>


						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-[310px] overflow-hidden  md:w-[300px] xl:w-[380px] mb-20 bg-[#ffffff]">
						{/* image */}
						<div className="relative">
							<img src={propertyImageTwo} className="hover:scale-105   duration-500 transition-transform  " alt="" />
							<p className="bg-[#222222] absolute top-3 left-3 text-white text-xs font-barlow px-2 py-1">For Sale</p>
							<p className="bg-[#aa8453] absolute top-3 left-[74px] text-white text-xs font-barlow px-2 py-1">Features</p>
							<div className="flex items-center  absolute bottom-6 left-3">
								<FaBuilding className="text-[#aa8453]" />
								<p className="text-white font-barlow">CONDO</p>
							</div>
							<div className="absolute right-4 bottom-4 flex gap-2">
								<div className="w-10 h-10 flex items-center justify-center bg-[#1f1f1f] text-white"><FaArrowRightArrowLeft /></div>
								<div className="w-10 h-10 flex items-center justify-center bg-[#1f1f1f] text-white"><CiHeart /></div>
								<div className="w-10 h-10 flex items-center justify-center bg-[#1f1f1f] text-white"><FaSearchPlus /></div>
							</div>
						</div>
						{/* text */}
						<div className="p-6">
							<h1 className="text-[#aa8453] font-sen font-bold text-[21px]">$1850 <span className="text-[14px] text-[#6d7175]">(monthly)</span></h1>
							<p className="text-[#12171f] font-sen text-lg font-medium py-1">Family House Residence</p>
							{/* location div */}
							<div className="flex text-[#6d7175] text-[14px]  items-center font-barlow">
								<MdLocationPin className="text-[#aa8453]" />
								<p>4213 South Burlingtion, VT 05403</p>
							</div>

							{/* itmes */}
							<div className="flex gap-4 pt-4 pb-8 text-[#6d7175] text-[15px] font-barlow">
								<div className="flex gap-2 items-center">
									<FaBed />
									<p>7</p>
								</div>
								<div className="flex gap-2 items-center">
									<FaBath />
									<p>5</p>
								</div>
								<div className="flex gap-2 items-center">
									<MdAreaChart />
									<p>1200 Sqft</p>
								</div>
								<div className="flex gap-2 items-center">
									<FaFireAlt />
									<p>Yes</p>
								</div>
							</div>

							<hr />

							{/* profile */}
							<div className="flex justify-between items-center pt-3 text-[#6d7175] font-barlow">
								<div className="flex gap-3 items-center">
									<img src={aliTufan} className="w-10 h-10 rounded-full" alt="" />
									<p className="hover:underline">Ali Tufan</p>
								</div>
								<p>2 Month Ago</p>
							</div>


						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-[310px] overflow-hidden  md:w-[300px] xl:w-[380px] mb-20 bg-[#ffffff]">
						{/* image */}
						<div className="relative">
							<img src={propertyImageThree} className="hover:scale-105   duration-500 transition-transform  " alt="" />
							<p className="bg-[#222222] absolute top-3 left-3 text-white text-xs font-barlow px-2 py-1">For Rent</p>
							<div className="flex items-center  absolute bottom-6 left-3">
								<FaBuilding className="text-[#aa8453]" />
								<p className="text-white font-barlow">VILLA</p>
							</div>
							<div className="absolute right-4 bottom-4 flex gap-2">
								<div className="w-10 h-10 flex items-center justify-center bg-[#1f1f1f] text-white"><FaArrowRightArrowLeft /></div>
								<div className="w-10 h-10 flex items-center justify-center bg-[#1f1f1f] text-white"><CiHeart /></div>
								<div className="w-10 h-10 flex items-center justify-center bg-[#1f1f1f] text-white"><FaSearchPlus /></div>
							</div>
						</div>
						{/* text */}
						<div className="p-6">
							<h1 className="text-[#aa8453] font-sen font-bold text-[21px]">$1850 <span className="text-[14px] text-[#6d7175]">(monthly)</span></h1>
							<p className="text-[#12171f] font-sen text-lg font-medium py-1">Family House Residence</p>
							{/* location div */}
							<div className="flex text-[#6d7175] text-[14px]  items-center font-barlow">
								<MdLocationPin className="text-[#aa8453]" />
								<p>4213 South Burlingtion, VT 05403</p>
							</div>

							{/* itmes */}
							<div className="flex gap-4 pt-4 pb-8 text-[#6d7175] text-[15px] font-barlow">
								<div className="flex gap-2 items-center">
									<FaBed />
									<p>7</p>
								</div>
								<div className="flex gap-2 items-center">
									<FaBath />
									<p>5</p>
								</div>
								<div className="flex gap-2 items-center">
									<MdAreaChart />
									<p>1200 Sqft</p>
								</div>
								<div className="flex gap-2 items-center">
									<FaFireAlt />
									<p>Yes</p>
								</div>
							</div>

							<hr />

							{/* profile */}
							<div className="flex justify-between items-center pt-3 text-[#6d7175] font-barlow">
								<div className="flex gap-3 items-center">
									<img src={aliTufan} className="w-10 h-10 rounded-full" alt="" />
									<p className="hover:underline">Ali Tufan</p>
								</div>
								<p>2 Month Ago</p>
							</div>


						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-[310px] overflow-hidden  md:w-[300px] xl:w-[380px] mb-20 bg-[#ffffff]">
						{/* image */}
						<div className="relative">
							<img src={propertyImageFour} className="hover:scale-105   duration-500 transition-transform  " alt="" />
							<p className="bg-[#222222] absolute top-3 left-3 text-white text-xs font-barlow px-2 py-1">For Rent</p>
							<div className="flex items-center  absolute bottom-6 left-3">
								<FaBuilding className="text-[#aa8453]" />
								<p className="text-white font-barlow">CONDO</p>
							</div>
							<div className="absolute right-4 bottom-4 flex gap-2">
								<div className="w-10 h-10 flex items-center justify-center bg-[#1f1f1f] text-white"><FaArrowRightArrowLeft /></div>
								<div className="w-10 h-10 flex items-center justify-center bg-[#1f1f1f] text-white"><CiHeart /></div>
								<div className="w-10 h-10 flex items-center justify-center bg-[#1f1f1f] text-white"><FaSearchPlus /></div>
							</div>
						</div>
						{/* text */}
						<div className="p-6">
							<h1 className="text-[#aa8453] font-sen font-bold text-[21px]">$1850 <span className="text-[14px] text-[#6d7175]">(monthly)</span></h1>
							<p className="text-[#12171f] font-sen text-lg font-medium py-1">Family House Residence</p>
							{/* location div */}
							<div className="flex text-[#6d7175] text-[14px]  items-center font-barlow">
								<MdLocationPin className="text-[#aa8453]" />
								<p>4213 South Burlingtion, VT 05403</p>
							</div>

							{/* itmes */}
							<div className="flex gap-4 pt-4 pb-8 text-[#6d7175] text-[15px] font-barlow">
								<div className="flex gap-2 items-center">
									<FaBed />
									<p>7</p>
								</div>
								<div className="flex gap-2 items-center">
									<FaBath />
									<p>5</p>
								</div>
								<div className="flex gap-2 items-center">
									<MdAreaChart />
									<p>1200 Sqft</p>
								</div>
								<div className="flex gap-2 items-center">
									<FaFireAlt />
									<p>Yes</p>
								</div>
							</div>

							<hr />

							{/* profile */}
							<div className="flex justify-between items-center pt-3 text-[#6d7175] font-barlow">
								<div className="flex gap-3 items-center">
									<img src={aliTufan} className="w-10 h-10 rounded-full" alt="" />
									<p className="hover:underline">Ali Tufan</p>
								</div>
								<p>2 Month Ago</p>
							</div>


						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-[310px] overflow-hidden  md:w-[300px] xl:w-[380px] mb-20 bg-[#ffffff]">
						{/* image */}
						<div className="relative">
							<img src={propertyImageOne} className="hover:scale-105   duration-500 transition-transform  " alt="" />
							<p className="bg-[#222222] absolute top-3 left-3 text-white text-xs font-barlow px-2 py-1">For Sale</p>
							<div className="flex items-center  absolute bottom-6 left-3">
								<FaBuilding className="text-[#aa8453]" />
								<p className="text-white font-barlow">APARTMENT</p>
							</div>
							<div className="absolute right-4 bottom-4 flex gap-2">
								<div className="w-10 h-10 flex items-center justify-center bg-[#1f1f1f] text-white"><FaArrowRightArrowLeft /></div>
								<div className="w-10 h-10 flex items-center justify-center bg-[#1f1f1f] text-white"><CiHeart /></div>
								<div className="w-10 h-10 flex items-center justify-center bg-[#1f1f1f] text-white"><FaSearchPlus /></div>
							</div>
						</div>
						{/* text */}
						<div className="p-6">
							<h1 className="text-[#aa8453] font-sen font-bold text-[21px]">$1850 <span className="text-[14px] text-[#6d7175]">(monthly)</span></h1>
							<p className="text-[#12171f] font-sen text-lg font-medium py-1">Family House Residence</p>
							{/* location div */}
							<div className="flex text-[#6d7175] text-[14px]  items-center font-barlow">
								<MdLocationPin className="text-[#aa8453]" />
								<p>4213 South Burlingtion, VT 05403</p>
							</div>

							{/* itmes */}
							<div className="flex gap-4 pt-4 pb-8 text-[#6d7175] text-[15px] font-barlow">
								<div className="flex gap-2 items-center">
									<FaBed />
									<p>7</p>
								</div>
								<div className="flex gap-2 items-center">
									<FaBath />
									<p>5</p>
								</div>
								<div className="flex gap-2 items-center">
									<MdAreaChart />
									<p>1200 Sqft</p>
								</div>
								<div className="flex gap-2 items-center">
									<FaFireAlt />
									<p>Yes</p>
								</div>
							</div>

							<hr />

							{/* profile */}
							<div className="flex justify-between items-center pt-3 text-[#6d7175] font-barlow">
								<div className="flex gap-3 items-center">
									<img src={aliTufan} className="w-10 h-10 rounded-full" alt="" />
									<p className="hover:underline">Ali Tufan</p>
								</div>
								<p>2 Month Ago</p>
							</div>


						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-[310px] overflow-hidden  md:w-[300px] xl:w-[380px] mb-20 bg-[#ffffff]">
						{/* image */}
						<div className="relative">
							<img src={propertyImageTwo} className="hover:scale-105   duration-500 transition-transform  " alt="" />
							<p className="bg-[#222222] absolute top-3 left-3 text-white text-xs font-barlow px-2 py-1">For Sale</p>
							<p className="bg-[#aa8453] absolute top-3 left-[74px] text-white text-xs font-barlow px-2 py-1">Features</p>
							<div className="flex items-center  absolute bottom-6 left-3">
								<FaBuilding className="text-[#aa8453]" />
								<p className="text-white font-barlow">CONDO</p>
							</div>
							<div className="absolute right-4 bottom-4 flex gap-2">
								<div className="w-10 h-10 flex items-center justify-center bg-[#1f1f1f] text-white"><FaArrowRightArrowLeft /></div>
								<div className="w-10 h-10 flex items-center justify-center bg-[#1f1f1f] text-white"><CiHeart /></div>
								<div className="w-10 h-10 flex items-center justify-center bg-[#1f1f1f] text-white"><FaSearchPlus /></div>
							</div>
						</div>
						{/* text */}
						<div className="p-6">
							<h1 className="text-[#aa8453] font-sen font-bold text-[21px]">$1850 <span className="text-[14px] text-[#6d7175]">(monthly)</span></h1>
							<p className="text-[#12171f] font-sen text-lg font-medium py-1">Family House Residence</p>
							{/* location div */}
							<div className="flex text-[#6d7175] text-[14px]  items-center font-barlow">
								<MdLocationPin className="text-[#aa8453]" />
								<p>4213 South Burlingtion, VT 05403</p>
							</div>

							{/* itmes */}
							<div className="flex gap-4 pt-4 pb-8 text-[#6d7175] text-[15px] font-barlow">
								<div className="flex gap-2 items-center">
									<FaBed />
									<p>7</p>
								</div>
								<div className="flex gap-2 items-center">
									<FaBath />
									<p>5</p>
								</div>
								<div className="flex gap-2 items-center">
									<MdAreaChart />
									<p>1200 Sqft</p>
								</div>
								<div className="flex gap-2 items-center">
									<FaFireAlt />
									<p>Yes</p>
								</div>
							</div>

							<hr />

							{/* profile */}
							<div className="flex justify-between items-center pt-3 text-[#6d7175] font-barlow">
								<div className="flex gap-3 items-center">
									<img src={aliTufan} className="w-10 h-10 rounded-full" alt="" />
									<p className="hover:underline">Ali Tufan</p>
								</div>
								<p>2 Month Ago</p>
							</div>


						</div>
					</div>
				</SwiperSlide>
				


			</Swiper>
		</div>
	);
};

export default RecentProperties;
