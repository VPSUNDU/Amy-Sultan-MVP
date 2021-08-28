import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Student from "./Student";
import Teacher from "./Teacher";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div>
				<nav className="navbar navbar-info bg-info justify-content-between"></nav>
				
				<Navbar />
				
				<Switch>
					<Route path="/Home" exact component={Home} />
					<Route path="/Teacher" component={Teacher} />
					<Route path="/Student" component={Student} />
				</Switch>
			</div>
			
			<div class="content flex">
				<p>created by J.A.S. | 2021 | First MVP</p>
			</div>
		</Router>
	);
}

export default App;
