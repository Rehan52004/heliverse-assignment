import React from "react";

function FeaturesCard(props) {
	const { img, title, description } = props;
	return (
		<>
			<div className="bg-gradient-to-b from-[#0F0821] to-[#221B32] border-2 border-[#332C42] rounded-3xl p-8 w-full">
				<img src={img} alt="" />
				<h5 className="text-2xl my-5">{title}</h5>
				<p className="lg:text-lg">{description}</p>
			</div>
		</>
	);
}

export default FeaturesCard;
