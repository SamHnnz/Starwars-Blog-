import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from "react-bootstrap";
// import { Planets } from "../views/planets";
// import { People } from "../views/people";
// import { Vehicles } from "../views/vehicles";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

export const Navbars = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<Navbar bg="dark" variant="dark" fixed="top">
				<Navbar.Brand href="#home">StarWars</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="#Planets">Planets</Nav.Link>
					<Nav.Link href="#People">People</Nav.Link>
					<Nav.Link href="#Vehicles">Vehicles</Nav.Link>
				</Nav>
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Dropdown Button
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{store.favorites
							? store.favorites.map((fav, i) => (
									<Dropdown.Item key={i}>
										{fav}{" "}
										<button
											onClick={() => {
												actions.deleteFavorite(fav);
											}}
										/>
									</Dropdown.Item>
							  ))
							: ""}
					</Dropdown.Menu>
				</Dropdown>
			</Navbar>
		</>
	);
};
