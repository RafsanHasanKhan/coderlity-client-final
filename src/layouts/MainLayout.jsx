import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
// import Navigation from '../components/Navbar/Navbar';


const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
