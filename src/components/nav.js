import React from 'react'
import { Link } from "react-router-dom";
import "../styles/nav.css"


export const Navbar = () => {
    return (
        <nav className="navbar">
			<div className="navbar__container">
				<h1 href="#home" id="navbar__logo">
				
				
				</h1>
				<ul className="navbar__menu">
					<Link to={"/services"}>
						<li className="navbar__item">
							<span href="#services" className="navbar__links" id="services-page">
								services
							</span>
						</li>
					</Link>	
				
					<Link to={"/"}>
						<li className="navbar__item">
							<span href="#home" className="navbar__links" id="home-page">
								home
							</span>
						</li>
					</Link>
					<Link to={"/about"}>
						<li className="navbar__item">
							<span href="#about" className="navbar__links" id="about-page">
							about
							</span>
						</li>
					</Link>
					<Link to={"/contact"}>
						<li className="navbar__btn">
							<span href="contact" className="button" id="contact">
								contact us
							</span>
						</li>
					</Link>
				
				</ul>
			</div>
			
		</nav>
    )
}
