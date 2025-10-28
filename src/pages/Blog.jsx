import React from 'react'
import { useParams } from 'react-router-dom'
import BlogCard from '/src/components/BlogCard.jsx'
import { BlogData } from '/src/assets/data/BlogData.jsx'
import { NavLink } from 'react-router-dom'


export function Blog() {

    const { slug } = useParams();
    console.log('slug from URL:', slug);
    
    const blog = BlogData[slug];


      if (!blog) {
        return <p>Blog not found</p>;
    }
    

    return(
        <div className="blog-page">
            <div className="blog-container">
                <img src={blog.image} alt={blog.alttext} width="500px"/>
                <div className="blog-content">
                    <h2>{ blog.title } </h2>
                    <div>{ blog.longContent } </div>
                </div>
                <span className="back-link-about" ><NavLink to='/about'>go back</NavLink></span>
                
            </div>
        </div>

    )

}

export default Blog