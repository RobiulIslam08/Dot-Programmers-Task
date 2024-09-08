import { Link } from "react-router-dom";
import postOne from "../../../assets/Home/post1.png"
import postTwo from "../../../assets/Home/post2.png"
import postThree from "../../../assets/Home/post3.png"

const RecentPost = () => {
	return (
		<div className="bg-[#f8f5f0] px-3 md:px-12 lg:px-16 pb-20 lg:pb-28 pt-20">
			{/* heading */}
			<div className="text-center px-4 w-full lg:w-[490px] xl:w-[640px] mx-auto">
				<p className="text-lg font-barlow text-[#b28f62] pb-4">Our Recent Post</p>
				<h1 className="font-sen font-bold text-4xl">Publish What We Think, About Our Company Activities</h1>
				<div className="p-[2px] w-10 my-6  mx-auto  bg-[#aa8453]"></div>
			</div>

			{/* post */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* card one*/}
				<div className="bg-[#ffffff]">
					<img src={postOne} alt="" />
					<div className="px-8 py-9">
						<h1 className="text-[21px] font-sen">Our latest development projects by more efficie.</h1>
						<p className="text-[#6d7175] font-barlow py-4">Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus.</p>
						<div className="flex">
							<p className="uppercase font-barlow text-[13px] text-[#aa8453] hover:underline"><Link>By Robert Haven</Link></p>
							<div className="divider divider-horizontal"></div>

							<p className="uppercase font-barlow text-[13px] text-[#aa8453] hover:underline"><Link>DEC 25, 2019</Link></p>
						</div>

					</div>
				</div>
				{/* card Two*/}
				<div className="bg-[#ffffff]">
					<img src={postTwo} alt="" />
					<div className="px-8 py-9">
						<h1 className="text-[21px] font-sen">Cultivating market leadership from the inside.</h1>
						<p className="text-[#6d7175] font-barlow py-4">Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus.</p>
						<div className="flex">
							<p className="uppercase font-barlow text-[13px] text-[#aa8453] hover:underline"><Link>By Robert Haven</Link></p>
							<div className="divider divider-horizontal"></div>

							<p className="uppercase font-barlow text-[13px] text-[#aa8453] hover:underline"><Link>DEC 25, 2019</Link></p>
						</div>

					</div>
				</div>
				{/* card three*/}
				<div className="bg-[#ffffff]">
					<img src={postThree} alt="" />
					<div className="px-8 py-9">
						<h1 className="text-[21px] font-sen">We are the next generation of the advertising.</h1>
						<p className="text-[#6d7175] font-barlow py-4">Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus.</p>
						<div className="flex">
							<p className="uppercase font-barlow text-[13px] text-[#aa8453] hover:underline"><Link>By Robert Haven</Link></p>
							<div className="divider divider-horizontal"></div>

							<p className="uppercase font-barlow text-[13px] text-[#aa8453] hover:underline"><Link>DEC 25, 2019</Link></p>
						</div>

					</div>
				</div>
				
			</div>
		</div>
	);
};

export default RecentPost;