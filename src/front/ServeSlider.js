import React, {useContext , useState, useEffect, useRef} from "react";
import { Context } from "./appContext";
import {FaAngleDoubleRight} from 'react-icons/fa';
import{FaAngleDoubleLeft} from 'react-icons/fa';
import "../styles/serve.css"


function ServeSliders(sliders){
    const [currents, setCurrents] = useState(0);
  
    const lengths = sliders.slides.length
    const {store, actions}= useContext(Context);
    const timeout = useRef(null);
    const nextSlide = ()=>{
        setCurrents(currents === lengths - 1 ? 0 : currents + 1)
    };
    useEffect(()=>{
        console.log(currents,lengths, sliders)
        const nextSlide =()=>{
            setCurrents(currents=> (currents === lengths - 1 ? 0 : currents + 1))


        }
        timeout.current = setTimeout(nextSlide, 3000);
        return function (){
            if(timeout.currents) {
                clearTimeout(timeout.currents)
            }
        }
    },[currents, lengths])
    const prevSlide = ()=>{
        setCurrents(currents === 0  ? lengths  - 1 : currents - 1)
    }
    if(Array.isArray(sliders) || sliders.lengths <= 0){
        return null
    }
    return (
        <div className="slider">
             <FaAngleDoubleLeft type="button" className="slider_left_btn" onClick={prevSlide}/ >
            < FaAngleDoubleRight  type="button" className="slider_btn" onClick={nextSlide}/>
             
        
           
       
            {store.services.map((item, index)=>{
                return(
                    <div className={index === currents ? "slide active" : "slide" } key={index}>
                        {index === currents && (
                            <>
                            
                            <div className="hero_contain">
                             <img className="images"  alt="" src={item.image}/>
                             
                            
                            
                             </div>
                             
                             </>
                            

                           
                        )}
        
                    
                       
                    </div>
                )
            })}
    
       
               

            
        </div> 
        
    ) 
}
export default ServeSliders