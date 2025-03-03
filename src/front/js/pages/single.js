import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { user, setUser} = useState();

	useEffect(()=>{

		const newUser = actions.getUser()
		.then(resp => setUser(resp));
	},[])

	if (!user) return null

	return (
		<div className="jumbotron">
			<h1>
				{user.email}
			</h1>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
