import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import './Products.css';
import hyiplab from '/assets/images/products/HYIPLAB.png';
import Xcash from '/assets/images/products/Xcash.png';
import signallab from '/assets/images/products/signallab.png';

const Products = () => {
  const products = [
    {
      img: hyiplab,
      name: 'SignalLab - Forex And Crypto Trading Signal Platform',
      rating: '5/5',
      category: 'Laravel',
      price: '$49',
      link: '#',
    },
    {
      img: Xcash,
      name: 'Xcash - Ultimate Wallet Solution',
      rating: '5/5',
      category: 'Laravel',
      price: '$149',
      link: '#',
    },
    {
      img: signallab,
      name: 'HYIPLAB - Complete HYIP Investment System',
      rating: '5/5',
      category: 'Laravel',
      price: '$199',
      link: '#',
    },
    
  ];

  return (
    <section className="products-section">
      <div className="products-container">
        <h2 className="products-title">Our Top Products</h2>
        <p className="products-description">
          We offer a range of high-quality digital products, including PHP
          Laravel frameworks, HTML React JS front-end templates, and MERN
          projects, designed to meet the needs of modern web development.
        </p>

        <div className="products-grid">
          {products.map((item, idx) => (
            <div className="product-card" key={idx}>
              <img src={item.img} alt={item.name} className="product-image" />
              <div className="product-content">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-rating">⭐ Rating: {item.rating}</p>
                <p className="product-category">Category: {item.category}</p>
                <div className="product-footer">
                  <a href={item.link} className="product-btn">
                    Live Preview
                  </a>
                  <span className="product-price">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            marginRight: '60px',
          }}
        >
          <MdKeyboardArrowLeft style={{ width: '32px', height: '32px' }} />
          <MdKeyboardArrowRight style={{ width: '32px', height: '32px' }} />
        </div>
      </div>
    </section>
  );
};

export default Products;
