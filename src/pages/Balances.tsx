import React, { useEffect } from "react";
import { useState } from "react";
import { getAxios } from "../axios/client";

export const Balances: React.FC = () => {
	const [krakenBalance, setKrakenBalance] = useState(0);
	const [krakenCurrency, setKrakenCurrency] = useState('USD');
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getAxios().get("/kraken/balance");
				const { amount, currency } = response.data;
				setKrakenBalance(amount);
				setKrakenCurrency(currency)
			} catch (err) {
				setKrakenBalance(0);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<h2>Balances</h2>
			<div />
			<h3>Kraken</h3>
			<div />
			<h3>{krakenBalance} {krakenCurrency}</h3>
		</>
	);
};
