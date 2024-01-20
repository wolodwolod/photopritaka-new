import EventsGallery from 'components/ImageGalleries/EventsGallery2';
import ButtonUp from 'components/ButtonUp';
import '../pages.scss';

const EventsUA = () => {
  return (
    <main>
      <section className="page_title">
        <div className="container">
          <p className="page_about">Портфоліо | Події</p>
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
