   import React from 'react'
   import MenuItem from '/src/components/MenuItem.jsx'
   
            
            
    export function InfoCardDataMenu({ title, cost, description }) {
        return(
                <div className="menu-container info-card">
                        <h2>MENU</h2>
                        <MenuItem 
                            title="Eyelash extensions- classic set"
                            cost="120"
                            description="Classic individual lashes. Natural looking bolder and longer lashes."
                        />
                        <MenuItem 
                            title="Eyelash extensions - hybrid set"
                            cost="140"
                            description="Blend of individual classic lashes and light handmade fans with three very fine lashes. A more feathery look between classics and light volume."
                        />
                        <MenuItem 
                            title="Eyelash extensions - light volume set"
                            cost="160"
                            description="Light handmade fans with three very fine lashes each applied to one lash. A gentle but fuller soft, fluffy finish."
                        />
                        <MenuItem 
                            title="Infills - classic - (up to 3 weeks)"
                            cost="90"
                            description=""
                        />
                        <MenuItem 
                            title="Infills - hybrid - (up to 3 weeks)"
                            cost="100"
                            description=""
                        />
                        <MenuItem 
                            title="Infills - light volume - (up to 3 weeks)"
                            cost="110"
                            description=""
                        />
                        <MenuItem 
                            title="Eyelash extension removal"
                            cost="35"
                            description=""
                        />
                        <MenuItem 
                            title="Eyelash extension removal with a new set"
                            cost="15"
                            description=""
                        />
                        <MenuItem 
                            title="Eyelash tint"
                            cost="30"
                            description=""
                        />
                        <MenuItem 
                            title="Lash Lift/Lamination & Tint (recommended)"
                            cost="90"
                            description="Elleeplex Profusion gentle lash lift with gentle grow out. A cysteamine system which maintains the bond integrity of the lash with no thioglycolate. 'Re-Gen' vitamin & mineral treatment included with every lift which strengthens, hydrates and protects the lashes. Re-lift every 6-8 weeks."
                        />
                        <MenuItem 
                            title="Lash Lift Lamination (without tint)"
                            cost="75"
                            description=""
                        />
                </div>
        )
    }
    
    export default InfoCardDataMenu