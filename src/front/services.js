import React, { useContext,useState,useEffect } from 'react';
import { Context } from "./appContext";
import "../styles/service.css"
 


export const Services = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="card__cont">
        
            {store.product.map((item,index)=>{
                return(
                    <div className="cont_card" key={index}>
                    <h2 className="title">{item.label}</h2>
                    <img className="main-img" src={item.image} alt="" />
                  
                </div>

                )
            })}
              
                   
              
           
            
            </div>
            
          
            
    );
};
