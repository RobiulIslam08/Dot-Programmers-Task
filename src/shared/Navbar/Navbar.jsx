
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
    if (window.scrollY > 120) {
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
      <div className={`transition duration-300 px-3 lg:px-16 ease-in-out ${isScrolled
        ? 'bg-[#222222] text-white shadow-lg fixed top-0 left-0 w-full z-50 hidden lg:flex'
        : 'fixed top-0 text-white left-0 w-full z-50'
        } ${!isScrolled ? 'bg-[#222222] lg:bg-transparent' : ''}`}>
        {/* First nav */}

        <nav
          className={` transition-all duration-500 ease-in-out ${isScrolled ? "hidden" : "md:flex hidden"
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
        <nav className="flex items-center justify-between pt-2 pb-3 md:pt-4">
          {/* Logo */}
          <div>
            <img src={logo} className="w-28 md:w-36" alt="Logo" />
          </div>

          {/* Nav items for large devices */}
          <div className="lg:flex hidden gap-7 items-center">
            <ul className="flex gap-7 items-center font-sen">
              <li className="hover:text-[#aa8453] transform transition duration-200 ease-out"><Link to="#">Home +</Link></li>
              <li className="hover:text-[#aa8453] transform transition duration-200 ease-out"><Link to="#">Listing +</Link></li>
              <li className="hover:text-[#aa8453] transform transition duration-200 ease-out"><Link to="#">Features +</Link></li>
              <li className="hover:text-[#aa8453] transform transition duration-200 ease-out"><Link to="#">Pages +</Link></li>
              <li className="hover:text-[#aa8453] transform transition duration-200 ease-out"><Link to="#">Blog +</Link></li>
              <li className="hover:text-[#aa8453] transform transition duration-200 ease-out"><Link to="#">Contact</Link></li>
            </ul>
            <button className="bg-[#aa8453] hover:bg-[#b39063] px-[22px] py-[10px] font-sen text-base">
              + Create Listing
            </button>
          </div>

          {/* Offcanvas menu for small devices */}
          <HiOutlineMenuAlt3
            className="text-4xl text-[#aa8453] lg:hidden cursor-pointer"
            onClick={toggleOffcanvas}
          />

          {/* Offcanvas Top */}
          <div
            className={`fixed top-[50px] md:top-[100px] left-0 max-h-full w-full bg-[#222222] text-white transition-all duration-500 ease-in-out ${isOffcanvasOpen ? "translate-y-0 h-[330px]" : "-translate-y-full h-0 "} overflow-auto`}
            style={{ zIndex: 1000 }}
          >
            {/* Offcanvas body */}
            <div className="p-4 overflow-y-auto ">
              <ul className="space-y-4">
                <li className="hover:text-[#aa8453] transform transition duration-200 ease-out"><Link to="#">
                  <div className="flex justify-between">
                    <p>Home</p>
                    <p>+</p>
                  </div>
                </Link></li>
                <li className="hover:text-[#aa8453] transform transition duration-200 ease-out"><Link to="#">
                  <div className="flex justify-between">
                    <p>Listing</p>
                    <p>+</p>
                  </div>
                </Link></li>
                <li className="hover:text-[#aa8453] transform transition duration-200 ease-out"><Link to="#">
                  <div className="flex justify-between">
                    <p>Features</p>
                    <p>+</p>
                  </div>
                </Link></li>
                <li className="hover:text-[#aa8453] transform transition duration-200 ease-out"><Link to="#">
                  <div className="flex justify-between">
                    <p>Pages</p>
                    <p>+</p>
                  </div>
                </Link></li>
                <li className="hover:text-[#aa8453] transform transition duration-200 ease-out"><Link to="#">
                  <div className="flex justify-between">
                    <p>Blogs</p>
                    <p>+</p>
                  </div>
                </Link></li>
                <li className="hover:text-[#aa8453] transform transition duration-200 ease-out"><Link to="#">Contact</Link></li>
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

