import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from './MenuItem'
import { Login, Help, Home, EuroSymbol } from '@mui/icons-material'
import { useCookies } from 'react-cookie'

export default function Menu() {
	const [cookies] = useCookies(['accessToken'])

	return (
		<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			<nav aria-label="main mailbox folders">
				<MenuItem name='Home' path='/' icon={Home} />
				{!cookies.accessToken && <MenuItem name='Sign in' path='/signin' icon={Login} />}
				{cookies.accessToken && <MenuItem name='Balances' path='/balances' icon={EuroSymbol} />}
				<MenuItem name='Status' path='/status' icon={Help} />
			</nav>
		</Box>
	);
}
