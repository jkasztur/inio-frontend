import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from './components/Menu'
import AppSwitch from './components/AppSwitch'

function App() {
	return (
		<Router>
			<div style={{ display: "flex", flexDirection: 'row', flex: 1 }}>
				<Menu />
				<AppSwitch />
			</div>
		</Router >
	);
}

export default App;
