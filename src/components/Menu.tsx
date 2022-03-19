import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import MenuItem from './MenuItem'
import { useCookies } from 'react-cookie'
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

export default function Menu() {
	const [cookies] = useCookies(['accessToken'])
	const [openSettings, setOpenSettings] = useState(true);
	const handleClick = () => {
		setOpenSettings(!openSettings);
	};
	return (
		<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			<nav aria-label="main mailbox folders">
				<MenuItem name='Home' path='/' />
				{!cookies.accessToken && <MenuItem name='Sign in' path='/signin' />}
				{cookies.accessToken && <MenuItem name='Balances' path='/balances' />}
				{cookies.accessToken && (<ListItem disablePadding onClick={handleClick}>
					<ListItemButton>
						<ListItemText primary='Settings' />
						{openSettings ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
				</ListItem>)}
				<Collapse in={openSettings} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<MenuItem name='Kraken' path='/settings/kraken' withPadding={true} />
						<MenuItem name='Binance' path='/settings/binance' withPadding={true} />
						<MenuItem name='ETH' path='/settings/eth' withPadding={true} />
						<MenuItem name='BSC' path='/settings/bsc' withPadding={true} />
					</List>
				</Collapse>
				<MenuItem name='Status' path='/status' />
			</nav>
		</Box>
	);
}
