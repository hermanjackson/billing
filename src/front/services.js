import React, { useContext } from 'react';
import ServeSliders from './ServeSlider';
import { Context } from "./appContext";

import "../styles/service.css"
import Card from '../front/cardui';
 


export const Services = () => {
    const { store, actions } = useContext(Context);
	return(
		<div className="hero_cont">
			<div className="hero">
				<ServeSliders slides={store.service}/>
				
			

			</div>
			<div className="myservices">
				<Card/>

			</div>

		</div>
	)
    
   


	
    
		
			
              
					

                   
					
              
           
    

	
    
        
      
                     
            
                   
              
           
            
            
            
          
            
    
}
