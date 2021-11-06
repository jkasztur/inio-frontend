import React from "react";
import AddressSettings from "../components/AddressSettings";
import ApiSecretSettings from '../components/ApiSecretSettings';

export const Settings: React.FC = () => {

	return (
		<div style={{ flexDirection: 'column' }}>
			<h1>Settings</h1>

			<ApiSecretSettings path='/kraken/setup' name='Kraken' />
			<div />
			<ApiSecretSettings path='/binance/setup' name='Binance' />
			<div />
			<AddressSettings path='/eth/setup' name='Ethereum Mainnet' />
			<div />
			<AddressSettings path='/eth/whitelist' name='Ethereum Mainnet - Whitelist contract' />
			<div />
			<AddressSettings path='/bsc/setup' name='Binance Smart Chain' />
		</div>
	);
};
