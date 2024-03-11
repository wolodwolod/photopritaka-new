import EventsGallery from 'components/ImageGalleries/EventsGallery2';
import ButtonUp from 'components/ButtonUp';
import '../pages.scss';

const EventsUA = () => {
  return (
    <main>
      <section className="page_title">
        <div className="container">
          <h3 className="page_about">Портфоліо | Події</h3>
        </div>
      </section>
      <div className="container">
        <EventsGallery />
      </div>
      <ButtonUp lang="ukr" />
    </main>
  );
};

export default EventsUA;
