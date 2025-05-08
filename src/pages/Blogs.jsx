import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blogs = () => {
  return (
    <div className="blogs-page">
      <Header />
      <section className="blogs-main">
        <div className="container">
          <h1>Blogs</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Habitant venenatis eget adipiscing neque urna dui.</p>
          
          <button className="browse-all">Browse All Blogs</button>
          
          <div className="blog-list">
            <div className="blog-item">
              <h2>Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Bibendum dolor felis tempor facilisi placerat arcu quis.</p>
              <button className="read-btn">Read Blog</button>
            </div>
            
            <div className="blog-item">
              <h2>Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Turpis consectetur risus etiam vitae ullamcorper.</p>
              <button className="read-btn">Read Blog</button>
            </div>
            
            <div className="blog-item">
              <h2>Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Velli et nibh cursus nunc faucibus condimentum.</p>
              <button className="read-btn">Read Blog</button>
            </div>
          </div>
          
          <div className="pagination">
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blogs;