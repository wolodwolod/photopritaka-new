
import EventsGallery from 'components/ImageGalleries/EventsGallery2';


const EventsUA = () => {
  return (
    <main>
      <div className="container">
        <div className="col-12 page_title">
        <p className="page_about">Портфоліо | Події</p>
          {/* <h2 className="text-center text-uppercase color3">
            Це - ти, і ти - ідеал.
          </h2> */}
        </div>
        <EventsGallery  />
        
      </div>
    </main>
  );
};

export default EventsUA;
