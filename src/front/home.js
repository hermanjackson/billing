import React, {useContext,useState } from 'react'
import { Link,  } from "react-router-dom";
import {Context} from "./appContext"

import "../styles/home.css"

export const Home = () => {
	
	const { store, actions } = useContext(Context);
    return (
        <div className="hero">
            <div className="hero_outer" id="home">
                <div className="hero__container">
                    <h1 className="hero__heading">medical billing at a safe and secure practice</h1>
                    <h1 className="hero__description">learn more</h1>
					<Link to={"/services"}>
                    <button className="main__btn">
                        <a href="servives">search</a>
                    </button>
					</Link>
                </div>
            </div>
			
			
			<div className="services" id="services">
			
				
	
				<h1 className="services_first">services</h1>
				{store.product.map((item, index)=>{
					return(
						<div className="services__wrapper"key={index}>
						<div className="services__card">
							<h2 className="services_title">{item.label}</h2>
							<img className="card_images" src={item.image} alt="" />
							<Link to={"services/"} >
							<button   className="card-btn">learn More</button>
							</Link>
						</div>
					</div>

					)
				})}
			
			</div>
		
		</div>
    )
}
