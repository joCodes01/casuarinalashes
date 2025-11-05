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
            <section className="blog-section">
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
            </section>
                  {/* FAQs <p>Can you infill my lashes from another lash tech?</p>
                <p>What is the environment like where you do the lashes?</p>
                <p>Can I buy aftercare products from you?</p>
                <p>How do I pay?</p>
                <p>Are there any reasons why I couldn't have eyelash extensions?</p>
                <p>Are there any reasons why I couldn't have a lash lift?</p>
                <p>Do yu offer brow services?</p> */}

     

            
        </>

        
    )
}

export default BlogSection