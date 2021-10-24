import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Status } from "../pages/Status";
import { Balances } from "../pages/Balances";
import { Signin } from "../pages/Signin";
import { Settings } from "../pages/Settings";

export default function AppSwitch() {
	return (
		<Switch>
			<Route path="/signin">
				<Signin />
			</Route>
			<Route path="/status">
				<Status />
			</Route>
			<Route path="/balances">
				<Balances />
			</Route>
			<Route path="/settings">
				<Settings />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	)
}