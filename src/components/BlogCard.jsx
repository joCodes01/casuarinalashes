import React from 'react'

export function BlogCard({ title, content, image, alttext }) {
    return(
    <div className="blog-card-container">
        <img src={image} alt={alttext} width="500px"/>
        <div className="text-container">
            <h3>{title}</h3>
            <div>{content}</div>
        </div>
    </div>
    )
}

export default BlogCard