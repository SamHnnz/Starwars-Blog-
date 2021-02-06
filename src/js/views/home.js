import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Main } from "../component/main";
import { Planets } from "./planets";
import { People } from "./people";
import { Vehicles } from "./vehicles";

export const Home = () => (
	<div>
		<Main />
		<h5>Planets</h5>
		<Planets />
		<h5>People</h5>
		<People />
		<h5>Vehicles</h5>
		<Vehicles />
	</div>
);
