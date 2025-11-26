import React from "react";

import { BlogData } from "/src/assets/data/BlogData.jsx";
import BlogCard from "/src/components/BlogCard.jsx";

import imageLiftApplication from "/src/assets/images/lashLiftApplication.jpg";
import imageVolumeLashes from "/src/assets/images/volumeLashes.jpg";
import imageClassicLashes from "/src/assets/images/ClassicLashes.jpg";

export function BlogSection() {
  const blogArray = Object.values(BlogData);

  return (
    <>
      <section className="blog-section">
        <div className="blog-section-container">
          {blogArray.map((blog) => (
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
    </>
  );
}

export default BlogSection;
