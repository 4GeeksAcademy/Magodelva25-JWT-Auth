import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const { email, setEmail} = useState();
	const { password, setPassword} = useState();

	return (
		<div className="text-center mt-5">
			<form onSubmit={(e) => {
				e.preventDefault();
				actions.login(email, password)
			}}>
				<input placeholder="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
				<input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
				<input type="submit"/>
			</form>
			<Link to='/single'>
				Go to user page
			</Link>
		</div>
	);
};
