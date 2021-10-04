import React from "react";
import logo from "../components/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; 


function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			{/* <div className="container"> */}
			<a className="navbar-brand"><img src={logo} alt="logo..." /></a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active ml-auto">
								<a className="nav-link ml-auto" href="#">
								<Link to="/Home">
								Home 
								</Link>
								<span className="sr-only"></span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
								<Link to="/Teacher">
								Teacher
								</Link>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
								<Link to="/Student">
								Student
								</Link>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
								<Link to="/teacherReg">
								Teachers' Login
								</Link>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
								<Link to="/StudentReg">
								Students' Login
								</Link>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
								<a href="https://my-en.superbook.cbn.com/games">Bible Games Link</a>
								</a>
							</li>
						</ul>
					</div>
				{/* </div> */}
		</nav>
	
	);
}

export default Navbar;
