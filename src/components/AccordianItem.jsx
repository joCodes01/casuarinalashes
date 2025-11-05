import React from 'react'
import { useState } from 'react'

export function AccordianItem({title, content, onClick, id, isActive}) {

    const accordianItemStyles = "accordian-item";
    //change to a style object.

    return(
        
    
        <div onClick={onClick} className={`${accordianItemStyles}`} id={id}>
            <div className="accordian-title-container">
                <h3>{title}</h3>
                <span>{isActive ? '-' : '+' }</span>
            </div>
            { isActive && 
                <div className="accordian-content-container">
                <p>{content}</p>
                </div>
            }  
        </div>
    )
}

export default AccordianItem