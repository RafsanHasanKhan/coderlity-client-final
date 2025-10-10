import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { TiStarFullOutline } from 'react-icons/ti';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import './Products.css';
import hyiplab from '/assets/images/products/HYIPLAB.png';
import Xcash from '/assets/images/products/Xcash.png';
import signallab from '/assets/images/products/signallab.png';

const Products = () => {
  const products = [
    {
      img: signallab,
      name: 'HYIPLAB - Complete HYIP Investment System',
      rating: '5/5',
      category: 'Laravel',
      price: '$199',
      link: '#',
    },
    {
      img: hyiplab,
      name: 'SignalLab - Forex And Crypto Trading Signal Platform',
      rating: '4/5',
      category: 'Laravel',
      price: '$49',
      link: '#',
    },
    {
      img: Xcash,
      name: 'Xcash - Ultimate Wallet Solution',
      rating: '3/5',
      category: 'Laravel',
      price: '$149',
      link: '#',
    },
  ];

  // Animation for the entire grid
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="products-section">
      <div className="products-container">
        <h2 className="products-title">Our Top Products</h2>
        <p className="products-description">
          We offer a range of high-quality digital products, including PHP
          Laravel frameworks, HTML React JS front-end templates, and MERN
          projects, designed to meet the needs of modern web development.
        </p>

        <motion.div
          className="products-grid"
          ref={containerRef}
          variants={cardVariants}
          initial="hidden"
          animate={controls}
        >
          {products.map((item, idx) => {
            const numericRating = parseInt(item.rating.split('/')[0]); // Convert "5/5" -> 5
            return (
              <motion.div
                className="product-card"
                key={idx}
                variants={itemVariants}
              >
                <img src={item.img} alt={item.name} className="product-image" />
                <div className="product-content">
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-rating">
                    Rating: <span>{item.rating}</span>
                    <span className="rating">
                      {Array.from({ length: 5 }, (_, index) => (
                        <span
                          key={index}
                          className={index < numericRating ? 'filled' : 'empty'}
                        >
                          <TiStarFullOutline />
                        </span>
                      ))}
                    </span>
                  </p>
                  <p className="product-category">
                    Category: <span>{item.category}</span>
                  </p>
                  <div className="product-footer">
                    <a href={item.link} className="product-btn">
                      Live Preview
                    </a>
                    <span className="product-price">{item.price}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            marginRight: '60px',
            marginTop: '20px',
          }}
        >
          <MdKeyboardArrowLeft
            style={{ width: '32px', height: '32px', cursor: 'pointer' }}
          />
          <MdKeyboardArrowRight
            style={{ width: '32px', height: '32px', cursor: 'pointer' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
