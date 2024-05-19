import React from "react";
import motionArtEffect4 from "../assets/images/motionarteffect-img4.png";

function CompanyRatingCard({ companyLogo }) {
	return (
		<>
			<div className="flex items-center">
				<img src={companyLogo} alt="" className="mr-2" />
				<div>
					<img src={motionArtEffect4} alt="" className="py-3" />
					<p>4.5 Score, 9 Reviews</p>
				</div>
			</div>
		</>
	);
}

export default CompanyRatingCard;
