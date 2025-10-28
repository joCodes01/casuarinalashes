import React from 'react'
import BlogCard from '/src/components/BlogCard.jsx'
import imageLashExtensions from '/src/assets/images/blog_LashExtensions.png'
import imageLashLift from '/src/assets/images/blog_LashLift.png'
import imageLashService from '/src/assets/images/blog_ExtensionsService.png'
import imageLashTypes from '/src/assets/images/blog_ExtensionTypes.png'
import imageExtensionsRemoval from '/src/assets/images/blog_ExtensionsRemoval.png'
import imageAftercare from '/src/assets/images/blog_LashServiceAftercare.png'
import imageLiftApplication from'/src/assets/images/lashLiftApplication.jpg'
import imageVolumeLashes from '/src/assets/images/volumeLashes.jpg'
import imageClassicLashes from '/src/assets/images/ClassicLashes.jpg'

export function Blog() {

    return(
        <>
            <div className="blog-container">
                <BlogCard 
                    title="What are eyelash extensions?"
                    content=""
                    image={ imageLashExtensions }
                    alttext=""
                />
                <BlogCard 
                    title="What is a lash lift?"
                    content=""
                    image={ imageLashLift }
                    alttext=""
                />
                <BlogCard 
                    title="What happens during the service?"
                    content=""
                    image={ imageLashService }
                    alttext=""
                />
                <BlogCard 
                    title="Classic, hybrid & light volume eyelash extensions"
                    content=""
                    image={ imageLashTypes }
                    alttext=""
                />
                <BlogCard 
                    title="Eyelash service aftercare"
                    content=""
                    image={ imageAftercare  }
                    alttext=""
                />
                <BlogCard 
                    title="Eyelash etensions removal"
                    content=""
                    image={ imageExtensionsRemoval }
                    alttext=""
                />
            
            </div>
                  {/* FAQs <p>Can you infill my lashes from another lash tech?</p>
                <p>What is the environment like where you do the lashes?</p>
                <p>Can I buy aftercare products from you?</p>
                <p>How do I pay?</p>
                <p>Are there any reasons why I couldn't have eyelash extensions?</p>
                <p>Are there any reasons why I couldn't have a lash lift?</p>
                <p>Do yu offer brow services?</p> */}

            <section className="service-explainer-container">
                <div className="service-explainer">
                    <div>
                        <h2>Gentle & comfortable lash lift application</h2>
                        <p>Perfect for a maintenance free lash enhancement! Elleeplex Profusion system with gentle cysteamine solution and nourishing Re-Gen treatment. </p> 
                    </div>
                    <img src={ imageLiftApplication } alt="" width="750px"/>
                </div>
                <div className="service-explainer">
                    <div>
                        <h2>Classic & gentle hybrid extension styles</h2>
                        <p>No mega volume fashion lashes here I’m afraid. I enjoy creating lashes that compliment your natural beauty but aren’t too extreme. I offer Classic, hybrid & gentle light volume lashes.</p> 
                    </div>
                    <div className="service-explainer-images">
                        <img src={ imageVolumeLashes } alt="Photo of volume lashes with a graphical cross through the image." width="400px"/>
                        <img src={ imageClassicLashes } alt="Photo of classic lashes with a graphical tick on the image." width="400px"/>
                    </div>
                    
                </div>

            </section>

            
        </>

        
    )
}

export default Blog