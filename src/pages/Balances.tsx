import { FormControl, InputLabel, Select } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import React from "react";
import { useState } from "react";
import SingleBalance from "../components/SingleBalance";

export const Balances: React.FC = () => {
	const [mainCurrency, setMainCurrency] = useState('CZK');

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
			<SingleBalance name='Kraken' path='/kraken/balance' currency={mainCurrency} />
			<SingleBalance name='Binance' path='/binance/balance' currency={mainCurrency} />
			<SingleBalance name='ETH Chain' path='/eth/balance' currency={mainCurrency} />
			<SingleBalance name='BSC Chain' path='/bsc/balance' currency={mainCurrency} />
			<SingleBalance name='Avax Chain' path='/avax/balance' currency={mainCurrency} />
		</div>
	);
};
