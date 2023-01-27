
import AllSessionsUA from 'components/AllSessions/AllSessionsUA';
// import MainUA from 'components/Main/PhotographerUA';


const HomePageUA = () => {
  

  return (
    <main>
       <div className="container">
        <div className="col-12 page_title">
        <p className="page_about">Всі сесії</p>
          {/* <h2 className="text-center text-uppercase color3">
            Це - ти, і ти - ідеал.
          </h2> */}
        </div>
        <AllSessionsUA />
        
      </div>
    </main>
  );
};

export default HomePageUA;
