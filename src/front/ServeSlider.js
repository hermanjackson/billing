import React, {useContext , useState, useEffect, useRef} from "react";
import { Context } from "./appContext";
import "../styles/serve.css"


function ServeSliders(sliders){
    const [currents, setCurrents] = useState(0);
  
    const lenghts = sliders.lenght
    const {store, actions}= useContext(Context);
    const timeout = useRef(null);
    const nextSlide = ()=>{
        setCurrents(currents === lenghts - 1 ? 0 : currents + 1)
    };
    useEffect(()=>{
        const nextSlide =()=>{
            setCurrents(currents=> (currents === lenghts - 1 ? 0 : currents + 1))

        }
        timeout.current = setTimeout(nextSlide, 2000);
        return function (){
            if(timeout.currents) {
                clearTimeout(timeout.currents)
            }
        }
    },[currents, lenghts])
    const prevSlide = ()=>{
        setCurrents(currents === 0  ? lenghts  - 1 : currents - 1)
    }
    if(Array.isArray(sliders) || sliders.lenghts <= 0){
        return null
    }
    return (
        <div className="slider">
              <button type="button" className="sliders_left_btn" onClick={prevSlide}/ >
                <button  type="button" className="sliders_btn" onClick={nextSlide}/>
        
           
       
            {store.services.map((item, index)=>{
                return(
                    <div className={index === currents ? "slide active" : "slide" } key={index}>
                        {index === currents && (
                            <>
                            
                            <div className="hero_cont">
                             <img className="images"  alt="" src={item.image}/>
                             <h1 className="hero_title">{item.title}</h1>
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