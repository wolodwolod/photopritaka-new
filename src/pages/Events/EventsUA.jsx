import EventsGallery from 'components/ImageGalleries/EventsGallery2';
import ButtonUp from 'components/ButtonUp';

const EventsUA = () => {
  return (
    <main>
      <div className="container">
        <div className="col-12 page_title">
          <p className="page_about">Портфоліо | Події</p>
        </div>
        <EventsGallery />
      </div>
      <ButtonUp lang='ukr' />
    </main>
  );
};

export default EventsUA;
