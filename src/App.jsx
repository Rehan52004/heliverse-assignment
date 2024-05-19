import React from "react";

//assets images
import motionArtEffect1 from "./assets/images/motionarteffect-img1.png";
import motionArtEffect2 from "./assets/images/motionarteffect-img2.png";
import motionArtEffect3 from "./assets/images/motionarteffect-img3.png";
import motionArtEffect5 from "./assets/images/motionarteffect-img5.png";
import motionArtEffect8 from "./assets/images/motionarteffect-img8.png";
import motionArtEffect6 from "./assets/images/motionarteffect-img6.png";
import motionArtEffect7 from "./assets/images/motionarteffect-img7.png";
import motionArtEffect9 from "./assets/images/motionarteffect-img9.png";
import motionArtEffect10 from "./assets/images/motionarteffect-img10.png";
import CompanyRatingCard from "./components/CompanyRatingCard";

//components
import Header from "./components/Header";
import ApplySectionCard from "./components/ApplySectionCard";
import FeaturesCard from "./components/FeaturesCard";

//react icons
import { BsArrowRight } from "react-icons/bs";

function App() {
	return (
		<>
			<div className="font-[sora] bg-[#0E131D] text-[white]">
				<div className="px-2 lg:px-20">
					<Header />
					<div className="grid grid-cols-1 md:grid-cols-12 py-32 gap-5 md:gap-0">
						<div className="md:col-span-3 text-lg lg:text-xl text-center md:text-start">
							<p className="mb-2 bg-gradient-to-r from-[#F87516] to-[#5E11FF] inline-block text-transparent bg-clip-text">
								Transform
							</p>
							<br />
							<p className="mb-2 bg-gradient-to-r from-[#F87516] to-[#5E11FF] inline-block text-transparent bg-clip-text">
								Your Website
							</p>
							<p className="mb-2">With Motion</p>
							<p>Art Effect</p>
						</div>
						<div className="md:col-span-7 text-center sm:text-start">
							<h1 className="text-4xl lg:text-6xl font-semibold">
								Attract Your Visitors
							</h1>
							<h1 className="text-4xl lg:text-6xl font-semibold my-5">
								Attention With Colorful
							</h1>
							<h1 className="text-4xl lg:text-6xl font-semibold bg-gradient-to-r from-[#F87516] to-[#5E11FF] inline-block text-transparent bg-clip-text">
								Motion Art Effect
							</h1>
							<p className="mt-5 lg:text-lg text-[#888497]">
								Unleash the power of creativity with Motion Art
								for Elementor - your ultimate solution for
								seamlessly integrating captivating animations
								into your website.
							</p>
						</div>
					</div>
					<div>
						<h3 className="text-2xl text-center">
							Trusted by thousands of users around the world
						</h3>
						<div className="flex justify-center lg:justify-between gap-5 py-16 flex-wrap gap-10 lg:gap-0">
							<CompanyRatingCard companyLogo={motionArtEffect1} />
							<CompanyRatingCard companyLogo={motionArtEffect2} />
							<CompanyRatingCard companyLogo={motionArtEffect3} />
						</div>
					</div>
					<div className="flex justify-between flex-wrap gap-5 lg:gap-0 py-20">
						<div className="w-[100%] lg:w-[60%] text-center sm:text-start">
							<h2 className="text-3xl lg:text-4xl">
								Turn Your Cursor Into A Colorful Magic Wand &
								Charm Your Visitors
							</h2>
							<p className="my-10 lg:text-lg">
								Motion Art for Elementor is a groundbreaking
								plugin that empowers you to effortlessly infuse
								your website with visually stunning motion art
								elements.
							</p>
							<button className="bg-gradient-to-r from-[#F87516] to-[#5E11FF] py-5 px-10 text-xl rounded-lg flex items-center mx-auto lg:mx-0">
								Purchase From Envato
								<BsArrowRight size={25} className="ml-3" />
							</button>
						</div>
						<img
							src={motionArtEffect5}
							alt=""
							className="mx-auto lg:mx-0"
						/>
					</div>
					<div className="py-10">
						<h2 className="text-3xl lg:text-4xl w-full lg:w-[50%] text-center mx-auto mb-16">
							Apply On Any Section Or Enable For Whole Page
						</h2>
						<div className="grid md:grid-cols-2 md:gap-10">
							<div>
								<ApplySectionCard image={motionArtEffect10} />
							</div>
							<div className="pt-20">
								<ApplySectionCard image={motionArtEffect10} />
							</div>
						</div>
					</div>
					<div className="text-center bg-gradient-to-b from-[#0F0821] to-[#221B32] border-2 border-[#332C42] rounded-3xl p-10 md:p-20 my-20">
						<h5 className="text-2xl">
							Supported by All Popular Browsers
						</h5>
						<p className="lg:text-lg w-full lg:w-[40%] mx-auto my-5">
							Rest assured, Motion Art is designed to be
							compatible with all major web browsers.
						</p>
						<img
							src={motionArtEffect8}
							alt=""
							className="mx-auto"
						/>
					</div>
					<div className="py-20">
						<div className="w-full lg:w-[50%] mx-auto text-center">
							<h3 className="text-3xl lg:text-4xl">
								An All-Round Plugin With Powerful Features
							</h3>
							<p className="lg:text-lg mt-5">
								Whether you're a seasoned web designer or just
								starting out, Motion Art for Elementor
								seamlessly integrates with the Elementor
								platform, providing you with a seamless and
								intuitive experience.
							</p>
						</div>
						<div className="flex flex-wrap lg:flex-nowrap gap-5 justify-around my-10">
							<FeaturesCard
								img={motionArtEffect6}
								title="Light Weight"
								description="Motion Art for Elementor is designed to be lightweight."
							/>
							<FeaturesCard
								img={motionArtEffect7}
								title="100% Responsive"
								description="Create a consistent visual experience across all devices."
							/>
							<FeaturesCard
								img={motionArtEffect9}
								title="User Friendly Interface"
								description="Ensure a smooth experience for both applicants and administrators."
							/>
						</div>
					</div>
				</div>
				<footer className="flex items-center lg:justify-between flex-col-reverse lg:flex-row gap-5 lg:gap-0 py-5 px-2 lg:px-20 text-sm bg-gradient-to-r from-[#F87516] to-[#5E11FF] text-center">
					<p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
					<div className="flex gap-4">
						<p>Documantation</p>
						<p>Support</p>
					</div>
				</footer>
			</div>
		</>
	);
}

export default App;
