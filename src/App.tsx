import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { Status } from "./pages/Status";
import { Balances } from "./pages/Balances";

function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/register">Registration</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/balances">Balances</Link>
						</li>
						<li>
							<Link to="/status">Status</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/register">
						<Registration />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/status">
						<Status />
					</Route>
					<Route path="/balances">
						<Balances />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
