import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Cards } from "../component/card";

export const People = () => {
	const { store, actions } = useContext(Context);
	console.log(store.people);
	return (
		<div className="text-center mt-5">
			<div className="container-fluid">
				<div className="scrolling-wrapper row flex-row flex-nowrap">
					{store.people.map((chars, i) => {
						return (
							<Cards
								key={i}
								title={chars.name}
								firstTitle={"Height: "}
								firstData={chars.height}
								secondTitle={"Mass: "}
								secondData={chars.mass}
								thirdTitle={"Eye Color: "}
								thirdData={chars.eye_color}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
