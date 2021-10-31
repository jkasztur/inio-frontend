import React from "react";
import ApiSecretSettings from '../components/ApiSecretSettings';

export const Settings: React.FC = () => {

	return (
		<div style={{ flexDirection: 'column' }}>
			<h2>Settings</h2>

			<ApiSecretSettings path='/kraken/setup' name='Kraken' />
			<div />
			<ApiSecretSettings path='/binance/setup' name='Binance' />
		</div>
	);
};
