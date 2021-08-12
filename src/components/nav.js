import React from 'react'
import { Link } from "react-router-dom";
import "../styles/nav.css"
import image18 from  "../images/image18.png"


export const Navbar = () => {
    return (
        <nav className="navbar">
			<div className="navbar__container">
			<Link to={"/"}>
				<h1 href="#home" id="navbar__logo">
					<img src={image18} className="logo" alt="logo"></img>
				
				
				</h1>
			</Link>	
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
					
					<Link to={"/smsform"}>
						<li className="navbar__btn">
							<span href="smsform" className="button" id="contact">
								contact us
							</span>
						</li>
					</Link>
				
				</ul>
			</div>
			
		</nav>
    )
}
