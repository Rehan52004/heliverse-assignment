import React from "react";
import logo from "../assets/images/MotionArtEffect-logo.png";

function Header() {
	return (
		<>
			<div className="flex justify-between items-center py-5">
				<img src={logo} alt="" className="w-1/2 sm:w-auto" />
				<button className="bg-white text-black hover:bg-transparent border-2 border-white hover:text-white px-9 py-4 rounded-md hidden lg:block text-lg">
					Purchase Now
				</button>
			</div>
		</>
	);
}

export default Header;
