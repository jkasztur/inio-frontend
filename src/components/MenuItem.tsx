import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";

export default function MenuItem(props: { name: string, path: string, icon: any }) {
	return (
		<Link to={props.path}>
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemIcon>
						<props.icon />
					</ListItemIcon>
					<ListItemText primary={props.name} />
				</ListItemButton>
			</ListItem>
		</Link>
	);
}
