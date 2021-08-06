import React from 'react'
import "../styles/breadcrum.css"
import {FaInstagramSquare}  from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';




export const Breadcrumb = () => {
    return (
        <nav className="nav_bar">
			<div className="navbar_container">
				<h1 href="#home" id="navbar_logo">
				
				
				</h1>
				<ul className="navbar_menu">
				
						<li className="navbar_item">
							<span href="#services" className="navbar_links" id="services-page">
                            561-502-9869
							</span>
						</li>
				
				
					
						<li className="navbar_item">
							<span href="#home" className="navbar_links" id="home-page">
								<FaInstagramSquare/>

							</span>
						</li>
				
						<li className="navbar_item">
							<span href="#about" className="navbar_links" id="about-page">
							<FaFacebook/>
							</span>
						</li>
					
					
						<li className="navbar_item">
							<span href="contact" className="navbar_links" id="contact">
                                <FaTwitter/>
								
							</span>
						</li>
				
				
				</ul>
			</div>
		</nav>
    )
}
