import Hero from "../../components/Hero/Hero";
import Featured from "./Featured/Featured";
import Products from "./Products/Products";
import Service from "./Services/Service";


const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Service></Service>
      <Products></Products>
      <Featured></Featured>
    </div>
  );
};

export default Home;
