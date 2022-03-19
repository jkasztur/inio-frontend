import * as React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useCookies } from 'react-cookie';
import { getAxios } from '../axios/client';

export default function SingleBalance(props: { path: string, name: string, currency: string }) {
	const [balance, setBalance] = useState('0');
	const [cookies] = useCookies(['accessToken', 'accountId'])

	const fetchData = useCallback(async () => {
		try {
			setBalance(`Loading...`);
			const response = await getAxios().get(props.path, {
				headers: {
					'x-access-token': cookies.accessToken,
					'x-account-id': cookies.accountId
				},
				params: {
					currency: props.currency
				},
				withCredentials: true
			});
			const { amount, currency } = response.data;
			setBalance(`${Intl.NumberFormat().format(amount)} ${currency}`);
		} catch (err) {
			setBalance(`0 ${props.currency}`);
		}
	}, [cookies, props])

	useEffect(() => {
		fetchData()
	}, [props.currency, fetchData]);

	return (
		<>
			<h3>{props.name}</h3>
			<div />
			<h3>{balance}</h3>
		</>
	)
}