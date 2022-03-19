import React from "react";
import ApiSecretSettings from '../../components/ApiSecretSettings';

export const SettingsKraken: React.FC = () => {

	return (
		<div style={{ flexDirection: 'column' }}>
			<h1>Kraken Settings</h1>

			<ApiSecretSettings path='/kraken/setup' name='Kraken' />
		</div>
	);
};
