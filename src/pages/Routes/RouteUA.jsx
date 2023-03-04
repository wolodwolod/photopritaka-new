import HeaderUA from 'components/Header/HeaderUA';
import Footer from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const RouteUA = () => {
  return (
    <>
      <HeaderUA />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RouteUA;
