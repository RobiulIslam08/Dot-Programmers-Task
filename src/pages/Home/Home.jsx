import Banner from "../../component/Home/Banner/Banner";
import ClientTestimonials from "../../component/Home/ClientTestimonials/ClientTestimonials";
import GoToTop from "../../component/Home/GoToTop/GoToTop";
import MissionAndAcieve from "../../component/Home/MissionAndAcieve/MissionAndAcieve";
import PopularProperty from "../../component/Home/PopularProperty/PopularProperty";
import PropertyAgents from "../../component/Home/PropertyAgents/PropertyAgents";
import PropertyCategories from "../../component/Home/PropertyCategories/PropertyCategories";
import RecentPost from "../../component/Home/RecentPost/RecentPost";
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
		<PopularProperty></PopularProperty>
		<RecentPost></RecentPost>
		<GoToTop></GoToTop>
		</div>
	);
};

export default Home;