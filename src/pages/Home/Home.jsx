import Hero from '../../components/Hero/Hero';
import Blogs from './Blogs/Blogs';
import DigitalSolutions from './DigitalSolutions/DigitalSolutions';
import Faq from './Faq/Faq';

import Featured from './Featured/Featured';
import Products from './Products/Products';
import Service from './Services/Service';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Service></Service>
      <Products></Products>
      <Featured></Featured>
      <DigitalSolutions></DigitalSolutions>
      <Faq></Faq>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
