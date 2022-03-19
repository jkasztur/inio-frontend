import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Status } from "../pages/Status";
import { Balances } from "../pages/Balances";
import { Signin } from "../pages/Signin";
import { SettingsKraken } from "../pages/settings/SettingsKraken";
import { SettingsBinance } from "../pages/settings/SettingsBinance";
import { SettingsETH } from "../pages/settings/SettingsETH";
import { SettingsBSC } from "../pages/settings/SettingsBSC";

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
			<Route path="/settings/kraken">
				<SettingsKraken />
			</Route>
			<Route path="/settings/binance">
				<SettingsBinance />
			</Route>
			<Route path="/settings/eth">
				<SettingsETH />
			</Route>
			<Route path="/settings/bsc">
				<SettingsBSC />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	)
}