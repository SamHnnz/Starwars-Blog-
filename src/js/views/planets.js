import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Cards } from "../component/card";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	console.log(store.planets);
	return (
		<div className="text-center mt-5">
			<div className="container-fluid">
				<div className="scrolling-wrapper row flex-row flex-nowrap">
					{store.planets.map((planet, i) => {
						return (
							<Cards
								key={i}
								title={planet.name}
								firstTitle={"Climate: "}
								firstData={planet.climate}
								secondTitle={"Diameter: "}
								secondData={planet.diameter}
								thirdTitle={"Terrain: "}
								thirdData={planet.terrain}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
