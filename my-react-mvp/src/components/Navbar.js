import React from "react";
import logo from "../components/Logo.png"; 
// React Fontawesome Input 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars } from "@fortawesome/free-solid-svg-icons"; 

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-medium">
            <div className="container"> 
			<a className="navbar-brand" href="#"><img src={logo} alt="logo..."/></a>
			<button 
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<FontAwesomeIcon icon={faBars} style={{ color: "#000"}} />   
			</button>  

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Teacher
						</a>
					</li>
                    <li className="nav-item">
						<a className="nav-link" href="#">
							Student
						</a>
					</li>
				</ul>
			</div>
            </div >
		</nav>
	);
}

export default Navbar;
