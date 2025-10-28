import React from 'react'
import { NavLink } from 'react-router-dom'

export function BlogCard({ title, content, image, alttext, readmore }) {
    return(
            <NavLink to={`/blog/${readmore} `}>
                <div className="blog-card-container">
                    <img src={image} alt={alttext} width="500px"/>
                    <div className="text-container">
                        <h3>{title}</h3>
                        <div>{content}</div>
                        <p>Read more...</p>
                    </div>
                </div>
            </NavLink>
            
    )
}

export default BlogCard

                