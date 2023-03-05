import HeaderUA from 'components/Header/HeaderUA';
import Footer from 'components/Footer/Footer';
import { Outlet, Navigate } from 'react-router-dom';

const RouteUA = () => {
  const lang = localStorage.getItem('lang');

  if (lang === 'pol') {
    return <Navigate to="/pl/home" replace={true} />;
  } 
  // if (lang !== 'pol') {
  //   return <Navigate to="/ua" replace={true} />;
  // } 

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
