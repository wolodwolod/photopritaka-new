// import arrayOfImg from '../../shared/images/array';
import ImgEventsGallery from 'components/ImageGallery/ImgEventsGallery';


const EventsUA = () => {
  
  // const pathOfImg = '../../shared/images/events-img';
  // const arrayOfEventsImg = arrayOfImg.map(item => {
  //   return {
  //     id: item.id,
  //     src: pathOfImg + item.src,
  //   };
  // });
  // console.log(arrayOfEventsImg);

  return (
    <main>
      <div>
        <h2>Події</h2>
        <ImgEventsGallery />
      </div>
    </main>
  );
};

export default EventsUA;
