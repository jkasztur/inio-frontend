import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";

export default function MenuItem(props: { name: string, path: string }) {
	return (
		<Link to={props.path}>
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemText primary={props.name} />
				</ListItemButton>
			</ListItem>
		</Link>
	);
}
