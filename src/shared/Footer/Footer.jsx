import { FaFacebookF, FaGooglePlusG, FaLinkedin, FaPinterestP, FaRegCopyright, FaTwitter } from "react-icons/fa";
import logo from "../../assets/Home/logo-full-white.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      {/* first footer */}
      <div className=" bg-[#aa8453] px-3 md:px-12 lg:px-16 py-10 flex flex-col md:flex-row  justify-between items-center space-y-4">
        <p className="text-[30px] flex-1 font-sen text-white md:text-left text-center">Are you looking for a House or Property Customer?</p>
        <button className="bg-white text-[#222222] px-6 py-3 font-sen text-[15px]">Subscribe Now</button>

      </div>

      {/* second footer */}
      <div className="bg-[#12171f] px-3 md:px-12 lg:px-16 py-20 grid gap-8 grid-cols-1 md:grid-cols-2  lg:grid-cols-4">

        {/* first column */}
        <div>
          
            <img src={logo} alt="" />
          
          <p className="text-[#c3c3c3] py-6">Risus commodo congue augue phas ellus morbi hymenaeos ante tincidu eu orci dictum bibe ndum lacus pla tea primis mi lacinia</p>
          <div className="text-[#9b9b9b] flex gap-4">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedin></FaLinkedin>
            <FaGooglePlusG />
            <FaPinterestP />

          </div>
        </div>

        {/* second column */}
        <div>
          <h1 className="pb-6 text-white font-bold font-sen text-[21px]">Contact Info</h1>
          <p className="text-[#c3c3c3] pb-3">Unicoder Design Agency 301 The Greenhouse, Custard Factory, London, E3 8DY.</p>
          <p className="text-[#c3c3c3] pb-3">+1 246-345-0695
          </p>
          <p className="text-[#c3c3c3]">helpline@homex.com</p>
        </div>

        {/* third column */}
        <div>
          <h1 className="pb-6 text-white font-bold font-sen text-[21px]">Quick Links</h1>
          {/* links */}
          <div className="space-y-3">
            <p className="text-[#efefef] hover:text-[#aa8453] transition duration-500 ease-in-out"><Link>Our Services</Link></p>
            <p className="text-[#efefef] hover:text-[#aa8453] transition duration-500 ease-in-out"><Link>Investment Solution</Link></p>
            <p className="text-[#efefef] hover:text-[#aa8453] transition duration-500 ease-in-out"><Link>Frequenly Ask Question</Link></p>
            <p className="text-[#efefef] hover:text-[#aa8453] transition duration-500 ease-in-out"><Link>How It Work</Link></p>
            <p className="text-[#efefef] hover:text-[#aa8453] transition duration-500 ease-in-out"><Link>Become a Member</Link></p>
          </div>
        </div>

        {/*forth column  */}
        <div>
        <h1 className="pb-6 text-white font-bold font-sen text-[21px]">Appointment</h1>
        <p className="text-[#c3c3c3] pb-4">Litora ligula dapibus scelerisque vitae, fermentum aenean gravida lobortis mus pulvinar magna turient primis.</p>
        <button className="bg-[#aa8453] hover:bg-[#af8a5a] text-white w-full py-3  ">Register Now</button>
        </div>
      </div>

      {/* third footer */}
      <div className="bg-[#12171f] flex md:flex-row flex-col space-y-5 items-center justify-between  px-3 md:px-12 lg:px-16 pb-7 font-barlow text-[14px]">
        <div className="flex items-center text-[#ffffff] gap-1">
        <FaRegCopyright />
        <p> 2022 Uniland All right reserved</p>
        </div>
        <div className="flex items-center text-[#c3c3c3]">
          <p>Privacy & Policy</p>
          <div className="divider divider-success divider-horizontal"></div>
          <p>Site Map</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;