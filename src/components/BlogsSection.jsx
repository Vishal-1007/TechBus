import React from 'react';
import { Link } from 'react-router-dom';

const BlogsSection = () => {
  return (
    <section className="blogs-section">
      <div className="container">
        <h1>Blogs</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Habitant venenatis eget adipiscing neque urna dui.</p>
        
        <Link to="/blogs" className="browse-blogs">Browse All Blogs</Link>
        
        <div className="blog-posts">
          <div className="blog-post">
            <h2>Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Bibendum dolor felis tempor facilisi placerat arcu quis.</p>
            <Link to="/blogs/1" className="read-more">Read Blog</Link>
          </div>
          
          <div className="blog-post">
            <h2>Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Turpis consectetur risus etiam vitae ullamcorper.</p>
            <Link to="/blogs/2" className="read-more">Read Blog</Link>
          </div>
          
          <div className="blog-post">
            <h2>Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Velli et nibh cursus nunc faucibus condimentum.</p>
            <Link to="/blogs/3" className="read-more">Read Blog</Link>
          </div>
        </div>
        
        <div className="blog-highlight">
          <h2>Lorem Ipsum dolor sit amet consectetur.</h2>
          <p>Morbi faucibus cras prim commodo varius.</p>
          
          <div className="pagination">
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;