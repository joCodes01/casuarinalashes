import React from 'react'
import {FAQData} from '/src/assets/data/FAQData.jsx'
import { useState } from 'react'
import AccordianItem from '/src/components/AccordianItem.jsx'


export function Accordian() {

    const faq = FAQData;
    const [activeQ, setActiveQ] = useState(null);

   
    function handleToggleActiveQ(id) {

        setActiveQ( activeQ === id ? null : id );
    }   
   
    return(
        <>
            <div className="accordian-container">
                {FAQData.map((faq=> <AccordianItem 
                        title={faq.title} 
                        content={faq.content} 
                        id={faq.id}
                        key={faq.id}
                        isActive={activeQ === faq.id}
                        onClick={()=>handleToggleActiveQ(faq.id)}
                    />))}
            </div>
        </>
    )
}

export default Accordian
