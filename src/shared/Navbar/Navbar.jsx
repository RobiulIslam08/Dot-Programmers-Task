// // import { IoIosCall } from "react-icons/io";
// // import { Link } from "react-router-dom";
// // import logo from "../../assets/logo-white.png"
// // import { HiOutlineMenuAlt3 } from "react-icons/hi";
// // import { useState } from "react";

// // const Navbar = () => {
// // 	const [isOpen, setIsOpen] = useState(false);

// // 	const toggleOffcanvas = () => {
// // 	  setIsOpen(!isOpen);
// // 	};

// // 	return (
// // 		<>

// // 			<div className=" text-white md:px-8 lg:px-16  bg-[#222222]">

// // 			{/* frist nav */}
// // 			<nav className="hidden md:flex justify-between  pt-[10px] font-barlow text-[13px]">
// // 				<div className="flex items-center">
// // 					<IoIosCall className="text-lg "/>
// // 					<p > Need Support ? +1-435-782-4312</p>
// // 				</div>
// // 				<div> 
// // 					<ul className="flex space-x-4">
// // 						<li><Link to="#">About</Link></li>
// // 						<li><Link to="#">Sign Up</Link></li>
// // 						<li><Link to="#">Login</Link></li>
// // 					</ul>
// // 				</div>
// // 			</nav>

// // 			{/* second nav */}
// // 			<nav className="flex items-center justify-between pt-4">
// // 				{/* logo */}
// // 				<div>
// // 					<img src={logo} alt="" />
// // 				</div>

// // 				{/* nav item and button */}
// // 				<div className="">
// // 					{/* nav item for large device */}
// // 					<ul className="lg:flex hidden gap-7 items-center">

// // 						<li><Link to = "#">Home +</Link></li>
// // 						<li><Link to = "#">Listing +</Link></li>
// // 						<li><Link to = "#">Features +</Link></li>
// // 						<li><Link to = "#">Pages +</Link></li>
// // 						<li><Link to = "#">Blog +</Link></li>
// // 						<li><Link to = "#">Contact</Link></li>

// // 					<button className="bg-[#aa8453] px-[22px] py-[10px] font-sen text-base">+ Create Listing</button>
// // 					</ul>

// // 					{/* nav for small device */}
// // 					<HiOutlineMenuAlt3 className="text-4xl lg:hidden" />








// // 				</div>
// // 			</nav>
// // 			</div>


// // 		</>
// // 	);
// // };

// // export default Navbar;



// import { IoIosCall } from "react-icons/io";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo-white.png";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { useState } from "react";

// const Navbar = () => {
//   const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

//   const toggleOffcanvas = () => {
//     setIsOffcanvasOpen(!isOffcanvasOpen);
//   };

//   return (
//     <>
//       <div className="pb-20 text-white md:px-8 lg:px-16 bg-[#222222]">
//         {/* First nav */}
//         <nav className="hidden md:flex justify-between pt-[10px] font-barlow text-[13px]">
//           <div className="flex items-center">
//             <IoIosCall className="text-lg" />
//             <p>Need Support? +1-435-782-4312</p>
//           </div>
//           <div>
//             <ul className="flex space-x-4">
//               <li><Link to="#">About</Link></li>
//               <li><Link to="#">Sign Up</Link></li>
//               <li><Link to="#">Login</Link></li>
//             </ul>
//           </div>
//         </nav>

//         {/* Second nav */}
//         <nav className="flex items-center justify-between pt-4">
//           {/* Logo */}
//           <div>
//             <img src={logo} alt="Logo" />
//           </div>

//           {/* Nav items for large devices */}
//           <div className="lg:flex hidden gap-7 items-center">
//             <ul className="flex gap-7 items-center">
//               <li><Link to="#">Home +</Link></li>
//               <li><Link to="#">Listing +</Link></li>
//               <li><Link to="#">Features +</Link></li>
//               <li><Link to="#">Pages +</Link></li>
//               <li><Link to="#">Blog +</Link></li>
//               <li><Link to="#">Contact</Link></li>
//             </ul>
//             <button className="bg-[#aa8453] px-[22px] py-[10px] font-sen text-base">
//               + Create Listing
//             </button>
//           </div>

//           {/* Offcanvas menu for small devices */}
//           <HiOutlineMenuAlt3
//             className="text-4xl lg:hidden cursor-pointer"
//             onClick={toggleOffcanvas}
//           />

//           {/* Offcanvas Top */}
//           <div
//             className={`fixed top-0 left-0 w-full  bg-gray-800 text-white transform transition-transform ${
//               isOffcanvasOpen ? "translate-y-0" : "-translate-y-full"
//             }`}
//             style={{ zIndex: 1000 }}
//           >
//             {/* Offcanvas header */}
//             <div className="flex justify-between items-center p-4">
//               <h5 className="text-lg">Offcanvas Top</h5>
//               <button
//                 type="button"
//                 className="text-white text-2xl"
//                 onClick={toggleOffcanvas}
//               >
//                 &times;
//               </button>
//             </div>

//             {/* Offcanvas body */}
//             <div className="p-4">
//               <ul>
//                 <li><Link to="#">Home +</Link></li>
//                 <li><Link to="#">Listing +</Link></li>
//                 <li><Link to="#">Features +</Link></li>
//                 <li><Link to="#">Pages +</Link></li>
//                 <li><Link to="#">Blog +</Link></li>
//                 <li><Link to="#">Contact</Link></li>

//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-white.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };
  
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);  // If scrolled down 50px or more, add background
    } else {
      setIsScrolled(false);  // If near the top, remove background
    }
  };

  // Adding event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <div className={`transition duration-300  px-3 lg:px-16 ease-in-out ${
          isScrolled
            ? 'bg-[#222222] text-white shadow-lg fixed top-0 left-0 w-full z-50'
            : ' fixed top-0 text-white left-0 w-full z-50'
        }`}>
        {/* First nav */}
        {/* <nav className="hidden md:flex justify-between pt-[10px] font-barlow text-[13px]">
          <div className="flex items-center">
            <IoIosCall className="text-lg" />
            <p>Need Support? +1-435-782-4312</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li><Link to="#">About</Link></li>
              <li><Link to="#">Sign Up</Link></li>
              <li><Link to="#">Login</Link></li>
            </ul>
          </div>
        </nav> */}
        <nav
  className={` transition-all duration-500 ease-in-out ${
    isScrolled ? "hidden" : "md:flex hidden"
  } justify-between pt-[10px] font-barlow text-[13px]`}
>
  <div className="flex items-center">
    <IoIosCall className="text-lg" />
    <p>Need Support? +1-435-782-4312</p>
  </div>
  <div>
    <ul className="flex space-x-4">
      <li>
        <Link to="#">About</Link>
      </li>
      <li>
        <Link to="#">Sign Up</Link>
      </li>
      <li>
        <Link to="#">Login</Link>
      </li>
    </ul>
  </div>
</nav>


        {/* Second nav */}
        <nav className="flex items-center justify-between pt-4">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" />
          </div>

          {/* Nav items for large devices */}
          <div className="lg:flex hidden gap-7 items-center">
            <ul className="flex gap-7 items-center">
              <li><Link to="#">Home +</Link></li>
              <li><Link to="#">Listing +</Link></li>
              <li><Link to="#">Features +</Link></li>
              <li><Link to="#">Pages +</Link></li>
              <li><Link to="#">Blog +</Link></li>
              <li><Link to="#">Contact</Link></li>
            </ul>
            <button className="bg-[#aa8453] px-[22px] py-[10px] font-sen text-base">
              + Create Listing
            </button>
          </div>

          {/* Offcanvas menu for small devices */}
          <HiOutlineMenuAlt3
            className="text-4xl lg:hidden cursor-pointer"
            onClick={toggleOffcanvas}
          />

          {/* Offcanvas Top */}
          <div
  className={`fixed top-[77px] md:top-[107px] left-0 max-h-full w-full bg-[#222222] text-white transition-all duration-500 ease-in-out ${isOffcanvasOpen ? "translate-y-0 h-full" : "-translate-y-full h-0"} overflow-auto`}
  style={{ zIndex: 1000 }}
>
  {/* Offcanvas body */}
  <div className="p-4 overflow-y-auto h-full">
    <ul className="space-y-4">
      <li><Link to="#">
        <div className="flex justify-between">
          <p>Home</p>
          <p>+</p>
        </div>
      </Link></li>
      <li><Link to="#">
        <div className="flex justify-between">
          <p>Listing</p>
          <p>+</p>
        </div>
      </Link></li>
      <li><Link to="#">
        <div className="flex justify-between">
          <p>Features</p>
          <p>+</p>
        </div>
      </Link></li>
      <li><Link to="#">
        <div className="flex justify-between">
          <p>Pages</p>
          <p>+</p>
        </div>
      </Link></li>
      <li><Link to="#">
      <div className="flex justify-between">
          <p>Blogs</p> 
        <p>+</p>
        </div>
      </Link></li>
      <li><Link to="#">Contact</Link></li>
    </ul>
    <button className="bg-[#aa8453] px-[22px] py-[10px] font-sen text-base mt-4">
      + Create Listing
    </button>
  </div>
</div>

        </nav>
      </div>
    </>
  );
};

export default Navbar;

