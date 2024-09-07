import Banner from "../../component/Home/Banner/Banner";
import MissionAndAcieve from "../../component/Home/MissionAndAcieve/MissionAndAcieve";
import RecentProperties from "../../component/Home/RecentProperties/RecentProperties";


const Home = () => {
	return (
		<div className="">
        <Banner></Banner>
		<MissionAndAcieve></MissionAndAcieve>
		<RecentProperties></RecentProperties>
		</div>
	);
};

export default Home;