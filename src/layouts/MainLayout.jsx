import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar.jsx';


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
