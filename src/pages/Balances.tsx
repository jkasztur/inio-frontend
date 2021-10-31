import { FormControl, InputLabel, Select } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { getAxios } from "../axios/client";

export const Balances: React.FC = () => {
	const [krakenBalance, setKrakenBalance] = useState('0');
	const [binanceBalance, setBinanceBalance] = useState('0');
	const [mainCurrency, setMainCurrency] = useState('CZK');
	const [cookies] = useCookies(['accessToken', 'accountId'])

	async function fetchData(path: string, setBalanceFn: (value: any) => void) {
		try {
			setBalanceFn(`Loading...`);
			const response = await getAxios().get(path, {
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
			setBalanceFn(`${amount} ${currency}`);
		} catch (err) {
			setBalanceFn(`0 ${mainCurrency}`);
		}
	}
	useEffect(() => {
		fetchData('/kraken/balance', setKrakenBalance);
		fetchData('/binance/balance', setBinanceBalance);
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
			<div />
			<h3>Binance</h3>
			<div />
			<h3>{binanceBalance}</h3>
		</div>
	);
};
