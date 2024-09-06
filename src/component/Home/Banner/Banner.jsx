// import { useEffect, useState } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

// const Banner = () => {
// 	const slides = [
// 		{
// 		  url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
// 		},
// 		{
// 		  url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
// 		},
// 		{
// 		  url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
// 		},

// 		{
// 		  url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
// 		},
// 		{
// 		  url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
// 		},
// 	  ];

// 	  const [currentIndex, setCurrentIndex] = useState(0);

// 	  const prevSlide = () => {
// 		const isFirstSlide = currentIndex === 0;
// 		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
// 		setCurrentIndex(newIndex);
// 	  };

// 	  const nextSlide = () => {
// 		const isLastSlide = currentIndex === slides.length - 1;
// 		const newIndex = isLastSlide ? 0 : currentIndex + 1;
// 		setCurrentIndex(newIndex);
// 	  };

// 	  const goToSlide = (slideIndex) => {
// 		setCurrentIndex(slideIndex);
// 	  };

// 	  useEffect(() => {
// 		const interval = setInterval(() => {
// 		  nextSlide();
// 		}, 6000); // Changes slide every 3 seconds

// 		return () => clearInterval(interval); // Cleanup interval on component unmount
// 	  // eslint-disable-next-line react-hooks/exhaustive-deps
// 	  }, [currentIndex]);
// 	return (
// 		<div>
// 			<div className='max-w-[1400px] h-72  md:h-[780px] w-full m-auto relative group'>
//       <div
//         style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//         className='w-full h-full  bg-center bg-cover duration-500'
//       ></div>
//       {/* Left Arrow */}
//       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl  p-2 border-2 hover:bg-white hover:text-black text-white cursor-pointer'>
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div>
//       {/* Right Arrow */}
//       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl  p-2 border-2 hover:bg-white hover:text-black text-white cursor-pointer'>
//         <BsChevronCompactRight onClick={nextSlide} className='' size={30} />
//       </div>
//       <div className='flex top-4 justify-center py-2'>
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             className='text-2xl cursor-pointer'
//           >


//           </div>
//         ))}

//       </div>
//     </div>
// 		</div>
// 	);
// };

// export default Banner;
import { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import houseOne from "../../../assets/Home/1.png"
import houseTwo from "../../../assets/Home/14.png"
import houseThree from "../../../assets/Home/2.png"

const Banner = () => {
	const slides = [
		{
			url: houseOne,
			title: 'Property Listing Template',
			subtitle: 'Real Estate Listing Template',
			description: 'Looking for your dream house or property. Search here and select your best one from more than 1 million listing',
		},
		{
			url: houseThree,
			title: 'Amazing House Architect',
			subtitle: 'Real Estate Listing Template',
			description: 'Looking for your dream house or property. Search here and select your best one from more than 1 million listing.',
		},
		{
			url: houseTwo,
			title: '3D Interior Preview',
			subtitle: 'Real Estate Listing Template',
			description: 'Looking for your dream house or property. Search here and select your best one from more than 1 million listing.',
		},

	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 6000); // Changes slide every 6 seconds

		return () => clearInterval(interval); // Cleanup interval on component unmount
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentIndex]);

	return (
		<div className="relative">
			<div className="max-w-[1400px] h-72 md:h-[780px] w-full m-auto relative group">
				{/* Slide Image */}
				<div
					style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
					className="w-full h-full bg-center bg-cover duration-500"
				></div>

				{/* Overlay Text */}
				<div className="space-y-8  absolute inset-0 hidden md:flex flex-col items-center justify-center text-white text-center px-4">
					<h2 className=" md:text-xl font-semibold   ">{slides[currentIndex].subtitle}</h2>
					<h1 className=" md:text-4xl lg:text-5xl font-bold ">{slides[currentIndex].title}</h1>
					<p className="w-1/2 mx-auto md:text-lg  ">{slides[currentIndex].description}</p>
					<button className="bg-[#aa8453] text-white hover:bg-[#2e2314] hover:text-[#aa8453] px-9 py-4 rounded-full transform transition duration-400 ease-in-out">
						Preview Listing
					</button>

				</div>

				{/* search card */}
				<div className="relative -mt-48 z-10">
					<div className="bg-white shadow-lg p-7 w-[90%] mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
							{/* Enter Keyword Input */}
							<input
								type="text"
								placeholder="Enter Keyword..."
								className="border  px-4 py-3 w-full"
							/>

							{/* Property Types Dropdown */}
							<select className="border  px-4 py-3 w-full">
								<option>Property Types</option>
								<option>House</option>
								<option>Apartment</option>
								<option>Villa</option>
							</select>

							{/* Location Input */}
							<input
								type="text"
								placeholder="Location"
								className="border  px-4 py-3 w-full"
							/>

							{/* Price Dropdown */}
							<select className="border  px-4 py-3 w-full">
								<option>Price</option>
								<option>$100,000 - $200,000</option>
								<option>$200,000 - $500,000</option>
								<option>$500,000+</option>
							</select>

							{/* Advanced Options Button */}
							<button className="border  px-4 py-3 w-full text-center">
								Advanced
							</button>

							{/* Search Button */}
							<button className="bg-[#aa8453] text-white hover:bg-[#2e2314] px-9 py-4  w-full md:col-span-1">
								Search
							</button>
						</div>
					</div>
				</div>


				{/* Left Arrow */}
				<div className="hidden group-hover:block absolute top-[50%] transform transition-all duration-700 ease-in-out -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 border-2 hover:bg-white hover:text-black text-white cursor-pointer">
					<BsChevronCompactLeft onClick={prevSlide} size={30} />
				</div>

				{/* Right Arrow */}
				<div className="hidden group-hover:block absolute  top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 border-2 hover:bg-white hover:text-black text-white cursor-pointer ">
					<BsChevronCompactRight onClick={nextSlide} size={30} />
				</div>

				{/* Dots Navigation */}
				<div className="flex top-4 justify-center py-2">
					{slides.map((slide, slideIndex) => (
						<div
							key={slideIndex}
							onClick={() => goToSlide(slideIndex)}
							className={`mx-2 cursor-pointer ${currentIndex === slideIndex ? 'text-yellow-600' : 'text-white'}`}
						>

						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Banner;
