import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from './MenuItem'
import { Login, Add, Help, Home, EuroSymbol } from '@mui/icons-material'

export default function Menu() {
	return (
		<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			<nav aria-label="main mailbox folders">
				<MenuItem name='Home' path='/' icon={Home} />
				<MenuItem name='Sign in' path='/signin' icon={Login} />
				<MenuItem name='Balances' path='/balances' icon={EuroSymbol} />
				<MenuItem name='Status' path='/status' icon={Help} />
			</nav>
		</Box>
	);
}
