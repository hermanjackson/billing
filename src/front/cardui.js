import React, {useContext} from 'react'
import {Context} from "./appContext"

import "../styles/card.css"

const Card = props =>{
    const { store, actions } = useContext(Context);
    return(
        <div className="landing-container">
				{store.allServices.map((item, index) => {
					return (
						<div className="container_head" key={index}>
							<div className="card_main">
								<h3 className="header_words">{item.label}</h3>
								<img className="image_main" alt="" src={item.image} />
                                <p className="card_text">{item.description}</p>
							
								
							</div>
						</div>
					);
				})}
			</div>

    );

}

export default Card;