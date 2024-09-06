import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";


const Mainlayout = () => {
	return (
		<div>
		<Navbar></Navbar>
		<div>
		<Outlet></Outlet>
		</div>
		<Footer></Footer>
		</div>
	);
};

export default Mainlayout;