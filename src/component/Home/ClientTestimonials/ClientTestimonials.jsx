/* eslint-disable react/no-unescaped-entities */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { TfiQuoteRight } from 'react-icons/tfi';

const ClientTestimonials = () => {
	return (
		<div>
			{/* headint */}
			<div className="text-center px-4 w-full lg:w-[490px] xl:w-[640px] mx-auto">
				<p className="text-lg font-barlow text-[#b28f62] pb-4">Testimonial</p>
				<h1 className="font-sen font-bold text-4xl">Whay Client Says About Us</h1>
				<div className="p-[2px] w-10 my-6  mx-auto  bg-[#aa8453]"></div>
			</div>

			{/* testimonial slider */}
			<div className='w-full px-10 md:w-[630px] lg:w-[490px] xl:w-[640px] mx-auto text-center pb-20'>
				<Swiper
					pagination={{
						dynamicBullets: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					<SwiperSlide>
						<div className='flex flex-col justify-center mb-10 items-center'>
							<TfiQuoteRight className='text-[#aa8453] text-5xl mt-7 '></TfiQuoteRight>
							<p className='font-barlow text-[20px] text-[#414141] py-7'>"Posuere mu scurabitur parturient scelerisque suspendissse elementum facilissi dignissim nan purus torquent turpis interdum hendrerit erat ultrices pretium risus elementum. Fringilla alliquet aliquet mattis lacinia quam a montes maecenas parturient urna varis. Sollicitudin pede sapien taciti dui."</p>
							<h1 className='text-[#222222] font-sen pb-2 text-[24px]'>Mark Wiggins</h1>
							<p className='text-[#ccb597] font-barlow'>CEO ( Grodins Group )</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='flex flex-col justify-center items-center'>
							<TfiQuoteRight className='text-[#aa8453] text-5xl mt-7 '></TfiQuoteRight>
							<p className='font-barlow text-[20px] text-[#414141] py-7'>"Posuere mu scurabitur parturient scelerisque suspendissse elementum facilissi dignissim nan purus torquent turpis interdum hendrerit erat ultrices pretium risus elementum. Fringilla alliquet aliquet mattis lacinia quam a montes maecenas parturient urna varis. Sollicitudin pede sapien taciti dui."</p>
							<h1 className='text-[#222222] font-sen pb-2 text-[24px]'>Mark Wiggins</h1>
							<p className='text-[#ccb597] font-barlow'>CEO ( Grodins Group )</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='flex flex-col justify-center items-center'>
							<TfiQuoteRight className='text-[#aa8453] text-5xl mt-7 '></TfiQuoteRight>
							<p className='font-barlow text-[20px] text-[#414141] py-7'>"Posuere mu scurabitur parturient scelerisque suspendissse elementum facilissi dignissim nan purus torquent turpis interdum hendrerit erat ultrices pretium risus elementum. Fringilla alliquet aliquet mattis lacinia quam a montes maecenas parturient urna varis. Sollicitudin pede sapien taciti dui."</p>
							<h1 className='text-[#222222] font-sen pb-2 text-[24px]'>Mark Wiggins</h1>
							<p className='text-[#ccb597] font-barlow'>CEO ( Grodins Group )</p>
						</div>
					</SwiperSlide>

				</Swiper>
			</div>
		</div>
	);
};

export default ClientTestimonials;