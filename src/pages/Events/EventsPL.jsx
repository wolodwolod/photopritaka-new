import EventsGallery from 'components/ImageGalleries/EventsGallery';
import ButtonUp from 'components/ButtonUp';

import '../pages.scss';
import './events.scss';

const EventsPL = () => {
  return (
    <main>
      <div className="container">
        <div className="col-12 page_title">
          <p className="page_about">Portfolio | Wydarzenia</p>
        </div>
        <EventsGallery />
      </div>
      <ButtonUp lang='pol' />
    </main>
  );
};

export default EventsPL;
