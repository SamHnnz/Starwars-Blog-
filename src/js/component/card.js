import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Card, CardGroup, CardDeck, ListGroup, Container } from "react-bootstrap";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap-buttons";
import "../../styles/index.scss";

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
					<div className="hola d-flex justify-content-between">
						<Button
							variant="warning"
							className="btn btn-warning addfav"
							onClick={e => actions.addFavorite(props.title)}>
							<i className="fa fa-heart" aria-hidden="true" />
						</Button>
						<Link to="/planets">
							<Button
								variant="success"
								className="btn btn-success learn-more"
								onClick={e => actions.addFavorite(props.title)}>
								Learn more
							</Button>
						</Link>
					</div>
				</Card>
			</CardDeck>
		</div>
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
