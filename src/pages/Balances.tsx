import { FormControl, InputLabel, Select } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { getAxios } from "../axios/client";

export const Balances: React.FC = () => {
	const [krakenBalance, setKrakenBalance] = useState('0');
	const [mainCurrency, setMainCurrency] = useState('CZK');
	const [cookies] = useCookies(['accessToken', 'accountId'])

	async function fetchData() {
		try {
			const response = await getAxios().get("/kraken/balance", {
				headers: {
					'x-access-token': cookies.accessToken,
					'x-account-id': cookies.accountId
				},
				params: {
					currency: mainCurrency
				},
				withCredentials: true
			});
			const { amount, currency } = response.data;
			setKrakenBalance(`${amount} ${currency}`);
		} catch (err) {
			setKrakenBalance(`0 ${mainCurrency}`);
		}
	}
	useEffect(() => {
		fetchData();
	}, [mainCurrency]);

	return (
		<div style={{ flexDirection: 'column' }}>
			<h2>Balances</h2>
			<div />
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Currency</InputLabel>
				<Select
					value={mainCurrency}
					label="Currency"
					onChange={(event) => {
						setMainCurrency(event.target.value)
					}}
					defaultValue='CZK'
				>
					<MenuItem value={'USD'}>USD</MenuItem>
					<MenuItem value={'CZK'}>CZK</MenuItem>
					<MenuItem value={'EUR'}>EUR</MenuItem>
				</Select>
			</FormControl>
			<h3>Kraken</h3>
			<div />
			<h3>{krakenBalance}</h3>
		</div>
	);
};
