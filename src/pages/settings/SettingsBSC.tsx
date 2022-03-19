import React from "react";
import AddressSettings from "../../components/AddressSettings";

export const SettingsBSC: React.FC = () => {

	return (
		<div style={{ flexDirection: 'column' }}>
			<h1>Binance Smart Chain Settings</h1>
			<AddressSettings path='/bsc/setup' name='Binance Smart Chain' />
		</div>
	);
};
