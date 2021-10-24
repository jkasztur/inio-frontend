import { AxiosError } from "axios";
import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { getAxios } from "../axios/client";
import { ErrorMessage } from "../components/ErrorMessage";

export const Settings: React.FC = () => {
	const [krakenApiKey, setKrakenApiKey] = useState("");
	const [krakenSecret, setKrakenSecret] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState("");
	const [cookies] = useCookies(['accessToken', 'accountId'])

	function handleChangeKrakenApiKey(e: any) {
		setIsSubmitted(false);
		setKrakenApiKey(e.target.value);
	}

	function handleChangeKrakenSecret(e: any) {
		setIsSubmitted(false);
		setKrakenSecret(e.target.value);
	}

	function handleSubmitKraken(event: any) {
		event.preventDefault();
		if (krakenApiKey.length > 0 && krakenSecret.length > 0) {
			const postData = async () => {
				try {
					await getAxios().post("/kraken/setup", {
						apiKey: krakenApiKey,
						secret: krakenSecret,
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
		<div style={{ flexDirection: 'column' }}>
			<h2>Settings</h2>
			<h1>Kraken</h1>
			<form onSubmit={handleSubmitKraken}>
				<label>
					API key:
					<input type="text" name="apiKey" onChange={handleChangeKrakenApiKey} />
				</label>
				<div />
				<label>
					Secret:
					<input type="text" name="secret" onChange={handleChangeKrakenSecret} />
				</label>
				<div />
				<input type="submit" value="Submit" />
			</form>
			{isSubmitted && (
				<>
					<div />
					<label style={{ color: 'green' }}>Successfully modified Kraken settings!</label>
				</>
			)}
			<div />
			{error.length > 0 && <ErrorMessage message={error} />}
		</div>
	);
};
