import { AxiosError } from "axios";
import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { getAxios } from "../axios/client";
import { ErrorMessage } from "../components/ErrorMessage";

export default function SignInForm(props: { endpoint: string, title: string }) {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState("");
	const [_cookies, setCookie] = useCookies(['accessToken', 'accountId'])

	function handleChangeUsername(e: any) {
		setIsSubmitted(false);
		setUserName(e.target.value);
	}

	function handleChangePassword(e: any) {
		setIsSubmitted(false);
		setPassword(e.target.value);
	}

	function handleSubmit(event: any) {
		event.preventDefault();
		if (userName.length > 0 && password.length > 0) {
			const postData = async () => {
				try {
					const response = await getAxios().post(props.endpoint, {
						userName,
						password,
					});
					setCookie('accessToken', response.data.accessToken)
					setCookie('accountId', response.data.accountId)
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
			<h2>{props.title}</h2>
			<form onSubmit={handleSubmit}>
				<label>
					User name:
					<input type="text" name="userName" onChange={handleChangeUsername} />
				</label>
				<div />
				<label>
					Password:
					<input
						type="password"
						name="password"
						onChange={handleChangePassword}
					/>
				</label>
				<div />
				<input type="submit" value="Submit" />
			</form>
			{isSubmitted && (
				<>
					<div />
					<label style={{ color: 'green' }}>Successfully registered!</label>
				</>
			)}
			<div />
			{error.length > 0 && <ErrorMessage message={error} />}
		</div>
	);
};
