import React from 'react'

import { BlogData } from '/src/assets/data/BlogData.jsx'
import BlogCard from '/src/components/BlogCard.jsx'

import imageLiftApplication from'/src/assets/images/lashLiftApplication.jpg'
import imageVolumeLashes from '/src/assets/images/volumeLashes.jpg'
import imageClassicLashes from '/src/assets/images/ClassicLashes.jpg'

export function BlogSection() {

   

    const blogArray = Object.values(BlogData)

    // {blogArray}

    return(
        <>
            <div className="blog-section-container">
                {blogArray.map( (blog) => (
                     <BlogCard 
                        key={blog.slug}
                        title={blog.title}
                        content={blog.shortContent}
                        image={blog.image}
                        alttext={blog.alttext}
                        readmore={blog.slug}
                    />

                ))}
               
            
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

            
        </>

        
    )
}

export default BlogSection