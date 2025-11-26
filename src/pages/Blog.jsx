import React from 'react'
import { useParams } from 'react-router-dom'
import BlogCard from '/src/components/BlogCard.jsx'
import { BlogData } from '/src/assets/data/BlogData.jsx'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft' 


export function Blog() {

    const { slug } = useParams();
    console.log('slug from URL:', slug);
    
    const blog = BlogData[slug];

    const blogArray = Object.values(BlogData);
    console.log(blogArray);

    const currentBlog = blogArray.findIndex(blog => blog.slug === slug);
    console.log("current blog is: " + currentBlog);

    const prevBlog = currentBlog - 1;
    console.log("previous blog is: " + prevBlog)

    const nextBlog = currentBlog + 1;
    console.log("next blog is: " + nextBlog);

 






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
                {prevBlog >= 0 && (
                    <span className="back-link-about" ><NavLink to={`/blog/${blogArray[prevBlog].slug}`}>  <FontAwesomeIcon size="1x" icon={faArrowLeft} /> go back</NavLink></span>
                )}
                
            </div>
        </div>

    )

}

export default Blog