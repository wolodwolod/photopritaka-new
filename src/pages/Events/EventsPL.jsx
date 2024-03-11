import EventsGallery from 'components/ImageGalleries/EventsGallery';
import ButtonUp from 'components/ButtonUp';

import '../pages.scss';
import './events.scss';

const EventsPL = () => {
  return (
    <main>
      <section className="page_title">
        <div className="container">
          <h3 className="page_about">Portfolio | Wydarzenia</h3>
        </div>
      </section>
      <div className="container">
        <EventsGallery />
      </div>
      <ButtonUp lang="pol" />
    </main>
  );
};

export default EventsPL;
