import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Cards } from "../component/card";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);
	console.log(store.vehicles);
	return (
		<div className="text-center mt-5">
			<div className="container-fluid">
				<div className="scrolling-wrapper row flex-row flex-nowrap">
					{store.vehicles.map((vehicle, i) => {
						return (
							<Cards
								key={i}
								title={vehicle.name}
								firstTitle={"Model: "}
								firstData={vehicle.model}
								secondTitle={"Manufacturer: "}
								secondData={vehicle.manufacturer}
								thirdTitle={"Cost: "}
								thirdData={vehicle.cost_in_credits}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
