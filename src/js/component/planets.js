import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	console.log(store.planets);
	return (
		<div>
			<h1>Planetas: </h1>
			<ul>
				{store.planets.map((planet, i) => {
					return <li key={i}>{planet.name}</li>;
				})}
			</ul>
		</div>
	);
};
