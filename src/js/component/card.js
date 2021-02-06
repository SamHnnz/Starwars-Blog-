import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Card, CardGroup, CardDeck, ListGroup, Container } from "react-bootstrap";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap-buttons";

export const Cards = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid">
			<CardDeck>
				<Card style={{ width: "18rem" }}>
					<Card.Img
						variant="top"
						src="https://www.thesneakerone.com/18709-large_default/stance-empire-star-wars-m545d17emp-gry.jpg"
					/>
					<Card.Body>
						<Card.Title>{props.title}</Card.Title>
						<Card.Text>
							{props.firstTitle}
							{props.firstData}
						</Card.Text>
						<Card.Text>
							{props.secondTitle}
							{props.secondData}
						</Card.Text>
						<Card.Text>
							{props.thirdTitle}
							{props.thirdData}
						</Card.Text>
					</Card.Body>
					<Button variant="primary" className="btn btn-warning" style={{ width: "4rem", margin: "20px" }}>
						<i onClick={e => actions.addFavorite(props.title)} className="fa fa-heart" aria-hidden="true" />
					</Button>
				</Card>
			</CardDeck>
		</div>
		// <div className="container-fluid">
		// 	<div className="scrolling-wrapper">
		// 		<div className="card m-2 col-3 card-block">
		// 			<img
		// 				className="card-img-top"
		// 				src="https://www.thesneakerone.com/18709-large_default/stance-empire-star-wars-m545d17emp-gry.jpg"
		// 				alt="Card image cap"
		// 			/>
		// 			<div className="card-body">
		// 				<h5 className="card-title">{props.title}</h5>
		// 				<p classNameName="card-text">
		// 					{props.firstTitle}
		// 					{props.firstData}
		// 				</p>
		// 				<p classNameName="card-text">
		// 					{props.secondTitle}
		// 					{props.secondData}
		// 				</p>
		// 				<p classNameName="card-text">
		// 					{props.thirdTitle}
		// 					{props.thirdData}
		// 				</p>
		// 				<a href="#" className="btn btn-primary">
		// <i
		// 	onClick={e => actions.addFavorite(props.title)}
		// 	className="fa fa-heart"
		// 	aria-hidden="true"
		// />
		// 				</a>
		// 				<a href="#" className="btn btn-warning">
		// 					Learn more!
		// 				</a>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
};

Cards.propTypes = {
	title: PropTypes.string,
	firstTitle: PropTypes.string,
	firstData: PropTypes.string,
	secondTitle: PropTypes.string,
	secondData: PropTypes.string,
	thirdTitle: PropTypes.string,
	thirdData: PropTypes.string
};
