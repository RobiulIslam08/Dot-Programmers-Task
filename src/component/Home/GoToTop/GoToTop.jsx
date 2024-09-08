
// import { useEffect, useState } from "react";
// // import "./GoToTop.css"; // Assuming you have a CSS file for styling
// import { IoIosArrowUp } from "react-icons/io";

// const GoToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const goToBtn = () => {
//     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//   };

//   const listenToScroll = () => {
//     let heightToHidden = 20;
//     const winScroll =
//       document.body.scrollTop || document.documentElement.scrollTop;

//     if (winScroll > heightToHidden) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", listenToScroll);
//     return () => window.removeEventListener("scroll", listenToScroll);
//   }, []);

//   return (
//     <div className="wrapper">
//       {isVisible && (
//         <div className="top-btn" onClick={goToBtn}>
//           <IoIosArrowUp className="top-btn-icon" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default GoToTop;
import { useEffect, useState } from "react";
import { FaArrowDown, FaLongArrowAltUp } from "react-icons/fa";


const GoToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const goToBtn = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	const listenToScroll = () => {
		let heightToHidden = 20;
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;

		if (winScroll > heightToHidden) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
		return () => window.removeEventListener("scroll", listenToScroll);
	}, []);

	return (
		<div className="hidden xl:flex">
			{isVisible && (
				<div
					className="text-[2.4rem] w-[30px] h-[90px] text-white bg-[#0000ff] shadow-md  fixed bottom-8 right-8 z-10 flex justify-center items-center cursor-pointer transition-colors duration-300 ease-in-out "
					onClick={goToBtn}
				>
					<p className="text-xs absolute text-center mt-6  font-bold">go top</p>

					<FaLongArrowAltUp className=" w-5 h-5 mb-9" />
				</div>
			)}
		</div>
	);
};

export default GoToTop;
