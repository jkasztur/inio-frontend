import React from "react";
import { Registration } from "./Registration";
import { Login } from './Login'

export const Signin: React.FC = () => {
	return (
		<div style={{ flexDirection: 'row' }}>
			<Registration />
			<Login />
		</div>
	)
};
