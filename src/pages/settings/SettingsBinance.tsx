import React from "react";
import ApiSecretSettings from '../../components/ApiSecretSettings';

export const SettingsBinance: React.FC = () => {

	return (
		<div style={{ flexDirection: 'column' }}>
			<h1>Binance Settings</h1>

			<ApiSecretSettings path='/binance/setup' name='Binance' />
		</div>
	);
};
