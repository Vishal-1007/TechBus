import React from 'react';
import { Link } from 'react-router-dom';
import blogImg1 from '../assets/images/10.jpg';
import blogImg3 from '../assets/images/8.jpg';
import blogImg2 from '../assets/images/9.jpg';

const BlogsSection = () => {
  return (
    <section className="blogs-section">
      <div className="blogs-header">
        <div>
          <h1>Blogs</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Habitant venenatis eget adipiscing neque urna dui.</p>
        </div>
        <Link to="/blogs" className="browse-blogs">Browse All Blogs</Link>
      </div>

      <div className="blog-posts">
        <div className="blog-post">
          <img src={blogImg1} alt="Blog 1" />
          <div className="blog-content">
            <h2>Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Bibendum dolor felis tempor facilisi placerat arcu quis.</p>
            <Link to="/blogs/1" className="read-more">Read Blog</Link>
          </div>
        </div>

        <div className="blog-post">
          <img src={blogImg2} alt="Blog 2" />
          <div className="blog-content">
            <h2>Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Turpis consectetur risus etiam vitae ullamcorper.</p>
            <Link to="/blogs/2" className="read-more">Read Blog</Link>
          </div>
        </div>

        <div className="blog-post">
          <img src={blogImg3} alt="Blog 3" />
          <div className="blog-content">
            <h2>Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Velli et nibh cursus nunc faucibus condimentum.</p>
            <Link to="/blogs/3" className="read-more">Read Blog</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
