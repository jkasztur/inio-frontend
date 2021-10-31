import { AxiosError } from "axios";
import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { getAxios } from "../axios/client";
import { ErrorMessage } from "../components/ErrorMessage";

export const Settings: React.FC = () => {
	const [krakenApiKey, setKrakenApiKey] = useState("");
	const [krakenSecret, setKrakenSecret] = useState("");
	const [binanceApiKey, setBinanceApiKey] = useState("");
	const [binanceSecret, setBinanceSecret] = useState("");
	const [isSubmittedKraken, setIsSubmittedKraken] = useState(false);
	const [isSubmittedBinance, setIsSubmittedBinance] = useState(false);
	const [error, setError] = useState("");
	const [cookies] = useCookies(['accessToken', 'accountId'])

	function handleChangeKrakenApiKey(e: any) {
		setIsSubmittedKraken(false);
		setKrakenApiKey(e.target.value);
	}

	function handleChangeKrakenSecret(e: any) {
		setIsSubmittedKraken(false);
		setKrakenSecret(e.target.value);
	}

	function handleChangeBinanceApiKey(e: any) {
		setIsSubmittedBinance(false);
		setBinanceApiKey(e.target.value);
	}

	function handleChangeBinanceSecret(e: any) {
		setIsSubmittedBinance(false);
		setBinanceSecret(e.target.value);
	}

	function handleSubmit(event: any, path: string, apiKey: string, secret: string, setIsSubmitedFn: (data: any) => void) {
		event.preventDefault();
		if (apiKey.length > 0 && secret.length > 0) {
			const postData = async () => {
				try {
					await getAxios().post(path, {
						apiKey: apiKey,
						secret: secret,
					}, {
						headers: {
							'x-access-token': cookies.accessToken,
							'x-account-id': cookies.accountId
						},
						withCredentials: true
					});
					setIsSubmitedFn(true);
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
	function handleSubmitKraken(event: any) {
		handleSubmit(event, '/kraken/setup', krakenApiKey, krakenSecret, setIsSubmittedKraken)
	}
	function handleSubmitBinance(event: any) {
		handleSubmit(event, '/binance/setup', binanceApiKey, binanceSecret, setIsSubmittedBinance)
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
			{isSubmittedKraken && (
				<>
					<div />
					<label style={{ color: 'green' }}>Successfully modified Kraken settings!</label>
				</>
			)}
			<div />
			<h1>Binance</h1>
			<form onSubmit={handleSubmitBinance}>
				<label>
					API key:
					<input type="text" name="apiKey" onChange={handleChangeBinanceApiKey} />
				</label>
				<div />
				<label>
					Secret:
					<input type="text" name="secret" onChange={handleChangeBinanceSecret} />
				</label>
				<div />
				<input type="submit" value="Submit" />
			</form>
			{isSubmittedBinance && (
				<>
					<div />
					<label style={{ color: 'green' }}>Successfully modified Binance settings!</label>
				</>
			)}
			<div />
			{error.length > 0 && <ErrorMessage message={error} />}
		</div>
	);
};
