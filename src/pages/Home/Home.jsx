import Banner from "../../component/Home/Banner/Banner";
import MissionAndAcieve from "../../component/Home/MissionAndAcieve/MissionAndAcieve";
import PropertyCategories from "../../component/Home/PropertyCategories/PropertyCategories";
import RecentProperties from "../../component/Home/RecentProperties/RecentProperties";


const Home = () => {
	return (
		<div className="">
        <Banner></Banner>
		<MissionAndAcieve></MissionAndAcieve>
		<RecentProperties></RecentProperties>
		<PropertyCategories></PropertyCategories>
		</div>
	);
};

export default Home;