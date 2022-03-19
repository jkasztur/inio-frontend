import React from "react";
import AddressSettings from "../../components/AddressSettings";
import { useCookies } from "react-cookie";
export const SettingsAvax: React.FC = () => {
	const [cookies] = useCookies(['accessToken', 'accountId'])

	return (
		<div style={{ flexDirection: 'column' }}>
			<h1>Avax Mainnet Settings</h1>
			<AddressSettings path='/avax/setup' name='Avax Mainnet' />
		</div>
	);
};
