import * as React from 'react';
import Box from '@mui/material/Box';
import { useCookies } from 'react-cookie'
import { useState } from 'react';
import { getAxios } from '../axios/client';
import { AxiosError } from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ErrorMessage } from './ErrorMessage';

export default function ApiSecretSettings(props: { path: string, name: string }) {
	const [apiKey, setApiKey] = useState("");
	const [secret, setSecret] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState("");
	const [cookies] = useCookies(['accessToken', 'accountId'])

	function handleChangeApiKey(e: any) {
		setIsSubmitted(false);
		setApiKey(e.target.value);
	}

	function handleChangeSecret(e: any) {
		setIsSubmitted(false);
		setSecret(e.target.value);
	}

	function handleSubmit(event: any) {
		event.preventDefault();
		if (apiKey.length > 0 && secret.length > 0) {
			const postData = async () => {
				try {
					await getAxios().post(props.path, {
						apiKey: apiKey,
						secret: secret,
					}, {
						headers: {
							'x-access-token': cookies.accessToken,
							'x-account-id': cookies.accountId
						},
						withCredentials: true
					});
					setIsSubmitted(true);
					setError('')
				} catch (err) {
					setError(
						`message= ${(err as AxiosError).message}, data= ${JSON.stringify(
							(err as AxiosError).response?.data
						)}`
					);
				}
			};
			postData();
		} else {
			setError("Some input is empty");
		}
	}

	return (
		<>
			<h2>{props.name}</h2>
			<Box
				component='form'
				noValidate
				autoComplete="off"
				onSubmit={handleSubmit}
				sx={{
					'& .MuiTextField-root': { m: 1, width: '25ch' },
				}}>
				<TextField
					required
					id="outlined-required"
					label="API Key"
					onChange={handleChangeApiKey}
				/>
				<div />
				<TextField
					required
					id="outlined-required"
					label="Secret"
					onChange={handleChangeSecret}
				/>
				<div />
				<Button variant="outlined" type='submit'>Submit</Button>
			</Box>
			{isSubmitted && (
				<>
					<div />
					<label style={{ color: 'green' }}>Successfully modified {props.name} settings!</label>
				</>
			)}
			{error.length > 0 && <ErrorMessage message={error} />}
		</>
	);
}
