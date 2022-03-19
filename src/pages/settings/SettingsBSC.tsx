import React, { useEffect, useState, useCallback } from "react";
import AddressSettings from "../../components/AddressSettings";
import { DataGrid } from '@mui/x-data-grid';
import { getAxios } from "../../axios/client";
import { useCookies } from "react-cookie";
import { Button } from "@mui/material";

export const SettingsBSC: React.FC = () => {
	const [cookies] = useCookies(['accessToken', 'accountId'])
	const columns = [
		{ field: 'address', headerName: 'Address', width: 330 },
	]
	const rows: { id: string, address: string }[] = []
	const [whitelistedRows, setWhitelistedRows] = useState(rows);
	const [selected, setSelected] = useState<string[]>([]);

	const fetchData = useCallback(async () => {
		const response = await getAxios().get<{ addresses: string[] }>('/bsc/whitelist', {
			headers: {
				'x-access-token': cookies.accessToken,
				'x-account-id': cookies.accountId
			},
			withCredentials: true
		});
		const { addresses } = response.data;
		setWhitelistedRows(addresses.map(address => {
			return {
				id: address,
				address: address
			}
		}));
	}, [cookies])

	async function removeWhitelist() {
		await Promise.all(selected.map(async (address) => {
			await getAxios().delete(`/bsc/whitelist/${address}`, {
				headers: {
					'x-access-token': cookies.accessToken,
					'x-account-id': cookies.accountId
				},
				withCredentials: true
			});
		}))
		if (selected.length > 0) {
			setSelected([])
			await fetchData()
		}
	}

	useEffect(() => {
		fetchData()
	}, [fetchData]);

	return (
		<div style={{ flexDirection: 'column' }}>
			<h1>Binance Smart Chain Settings</h1>

			<AddressSettings path='/bsc/setup' name='Binance Smart Chain' />
			<div />
			<AddressSettings path='/bsc/whitelist' name='Binance Smart Chain - Whitelist contract' refresh={fetchData} />
			<div style={{ height: '100%', width: '100%' }}>
				<DataGrid
					rows={whitelistedRows}
					columns={columns}
					rowsPerPageOptions={[5]}
					checkboxSelection
					onSelectionModelChange={selection => setSelected(selection as string[])} />
			</div>
			<Button variant="outlined" color="error" onClick={removeWhitelist}>Remove selected from whitelist</Button>
		</div>
	);
};
