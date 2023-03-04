import HeaderPL from 'components/Header/HeaderPL';
import Footer from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const RoutePL = () => {
  return (
    <>
      <HeaderPL />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RoutePL;
