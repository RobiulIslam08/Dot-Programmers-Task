import Banner from "../../component/Home/Banner/Banner";
import ClientTestimonials from "../../component/Home/ClientTestimonials/ClientTestimonials";
import MissionAndAcieve from "../../component/Home/MissionAndAcieve/MissionAndAcieve";
import PropertyAgents from "../../component/Home/PropertyAgents/PropertyAgents";
import PropertyCategories from "../../component/Home/PropertyCategories/PropertyCategories";
import RecentProperties from "../../component/Home/RecentProperties/RecentProperties";


const Home = () => {
	return (
		<div className="">
        <Banner></Banner>
		<MissionAndAcieve></MissionAndAcieve>
		<RecentProperties></RecentProperties>
		<PropertyCategories></PropertyCategories>
		<PropertyAgents></PropertyAgents>
		<ClientTestimonials></ClientTestimonials>
		</div>
	);
};

export default Home;