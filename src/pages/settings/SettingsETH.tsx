import React from "react";
import AddressSettings from "../../components/AddressSettings";

export const SettingsETH: React.FC = () => {

	return (
		<div style={{ flexDirection: 'column' }}>
			<h1>Ethereum Mainnet Settings</h1>

			<AddressSettings path='/eth/setup' name='Ethereum Mainnet' />
			<div />
			<AddressSettings path='/eth/whitelist' name='Ethereum Mainnet - Whitelist contract' />
		</div>
	);
};
