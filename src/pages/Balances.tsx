import React, { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { getAxios } from "../axios/client";

export const Balances: React.FC = () => {
	const [krakenBalance, setKrakenBalance] = useState(0);
	const [krakenCurrency, setKrakenCurrency] = useState('USD');
	const [cookies] = useCookies(['accessToken', 'accountId'])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getAxios().get("/kraken/balance", {
					headers: {
						'x-access-token': cookies.accessToken,
						'x-account-id': cookies.accountId
					},
					withCredentials: true
				});
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
		<div style={{ flexDirection: 'column' }}>
			<h2>Balances</h2>
			<div />
			<h3>Kraken</h3>
			<div />
			<h3>{krakenBalance} {krakenCurrency}</h3>
		</div>
	);
};
