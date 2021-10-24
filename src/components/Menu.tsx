import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from './MenuItem'
import { useCookies } from 'react-cookie'

export default function Menu() {
	const [cookies] = useCookies(['accessToken'])

	return (
		<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			<nav aria-label="main mailbox folders">
				<MenuItem name='Home' path='/' />
				{!cookies.accessToken && <MenuItem name='Sign in' path='/signin' />}
				{cookies.accessToken && <MenuItem name='Balances' path='/balances' />}
				{cookies.accessToken && <MenuItem name='Settings' path='/settings' />}
				<MenuItem name='Status' path='/status' />
			</nav>
		</Box>
	);
}
