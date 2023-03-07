import EventsGallery from 'components/ImageGalleries/EventsGallery2';
import ButtonUp from 'components/ButtonUp';

import '../pages.scss';

const EventsPL = () => {
  return (
    <main>
      <div className="container">
        <div className="col-12 page_title">
          <p className="page_about">Portfolio | Wydarzenia</p>
        </div>
        <EventsGallery />
      </div>
      <ButtonUp />
    </main>
  );
};

export default EventsPL;
