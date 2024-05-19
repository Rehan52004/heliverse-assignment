import React from "react";

function ApplySectionCard({ image }) {
	return (
		<>
			<div className="p-10 bg-[#100921] border-2 border-[#332C42] rounded-3xl text-center sm:text-start">
				<h4 className="text-2xl md:text-3xl">Apply On Section</h4>
				<p className="py-5 lg:lg:text-lg">
					Apply on section is a game-changer, offering an unparalleled
					way to manage applications directly from your website.{" "}
				</p>
				<img src={image} alt="" />
			</div>
		</>
	);
}

export default ApplySectionCard;
