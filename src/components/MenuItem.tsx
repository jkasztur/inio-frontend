import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import { ListItemIcon } from '@mui/material';

export default function MenuItem(props: { name: string, path: string, withPadding?: boolean }) {
	return (
		<Link to={props.path}>
			<ListItem disablePadding>
				<ListItemButton>
					{props.withPadding && <ListItemIcon />}
					<ListItemText primary={props.name} />
				</ListItemButton>
			</ListItem>
		</Link>
	);
}
