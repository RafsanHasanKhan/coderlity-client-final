import Hero from '../../components/Hero/Hero';
import Blogs from './Blogs/Blogs';
import BrandSlider from './BrandSlider/BrandSlider';
import DigitalSolutions from './DigitalSolutions/DigitalSolutions';
import Faq from './Faq/Faq';

import Featured from './Featured/Featured';
import IdeaProcess from './IdeaProcess/IdeaProcess';
import Products from './Products/Products';
import Service from './Services/Service';
import WorkProcess from './WorkProcess/WorkProcess';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Service></Service>
      <Products></Products>
      <BrandSlider></BrandSlider>
      <Featured></Featured>
      <DigitalSolutions></DigitalSolutions>
      <IdeaProcess></IdeaProcess>
      <WorkProcess></WorkProcess>
      <Faq></Faq>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
