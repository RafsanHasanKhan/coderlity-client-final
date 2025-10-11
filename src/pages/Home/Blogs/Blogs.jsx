import { useState } from 'react';
import './Blogs.css';
import blogsImg from '../../../../public/assets/images/blogs.png'

const Blogs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const blogs = [
    {
      date: '27.09.2025',
      title: 'The History of Web Development',
      description:
        'Advanced code solutions added directly inside of Webflow at the click of a button.',
    },
    {
      date: '27.09.2025',
      title: 'Mastering Responsive Design',
      description:
        'Advanced code solutions added directly inside of Webflow at the click of a button.',
    },
    {
      date: '27.09.2025',
      title: 'Modern Front-End Frameworks',
      description:
        'Advanced code solutions added directly inside of Webflow at the click of a button.',
    },
    {
      date: '27.09.2025',
      title: 'Optimizing Website Performance',
      description:
        'Advanced code solutions added directly inside of Webflow at the click of a button.',
    },
  ];

  return (
    <section className="blogs-section">
      <div className="blogs-header">
        <h2>Our Blogs</h2>
        <a href="#">Browse all</a>
      </div>
      <p className="blogs-subtitle">
        Discover articles and tutorials to help you build better
      </p>

      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className={`blog-card ${activeIndex === index ? 'active' : ''}`}
          >
            <img src={blogsImg} alt="" />
            <p className="blog-date">{blog.date}</p>
            <h3
              className="blog-title"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              {blog.title}
            </h3>
            <p className="blog-description">{blog.description}</p>
            <button className="blog-btn">READ MORE</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
