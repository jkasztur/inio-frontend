import React from "react";
import SignInForm from "../components/SignInForm";

export const Signin: React.FC = () => {
	return (
		<div style={{ flexDirection: 'row' }}>
			<SignInForm endpoint="/auth/register" title="Register" />
			<SignInForm endpoint="/auth/login" title="Login" />
		</div>
	)
};
