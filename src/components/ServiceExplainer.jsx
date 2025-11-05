export function ServiceExplainer() {       
        
    return (
       <section className="service-explainer-container">
                <div className="service-explainer">
                    <div>
                        <h2>Gentle & comfortable lash lift application</h2>
                        <p>Perfect for a maintenance free lash enhancement! Elleeplex Profusion system with gentle cysteamine solution and nourishing Re-Gen treatment. </p> 
                    </div>
                    <img className="lift-image" src={ imageLiftApplication } alt="" width="600px"/>
                </div>
                <div className="service-explainer">
                    <div>
                        <h2>Classic & gentle hybrid extension styles</h2>
                        <p>No mega volume fashion lashes here I’m afraid. I enjoy creating lashes that compliment your natural beauty but aren’t too extreme. I offer Classic, hybrid & gentle light volume lashes.</p> 
                    </div>
                    <div className="service-explainer-images">
                        <img src={ imageVolumeLashes } alt="Photo of volume lashes with a graphical cross through the image." width="300px"/>
                        <img src={ imageClassicLashes } alt="Photo of classic lashes with a graphical tick on the image." width="300px"/>
                    </div>
                </div>
            </section>
    )

}

export default ServiceExplainer