import './about-photographer.scss'
import photographer from '../../shared/images/Tetiana Pritaka.JPG';

const AboutPhotographerUA = () => {
  return (
    <section className="author">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center text-uppercase color3 mb-5">
              Про фотографа
            </h2>
          </div>
          <div className="col-xl-9 col-lg-12">
            <h4>Тетяна Притака</h4>
            <p>Займаюсь фотографією з 2015 року</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              eleifend dui ac turpis pulvinar, vitae cursus augue consequat.
              Integer at erat massa. Ut volutpat orci ipsum, et varius libero
              tristique et. In pulvinar, dolor et semper rutrum, dui leo congue.
            </p>
            <p>
              Aliquam erat volutpat. Duis nunc orci, aliquet ac semper ac,
              elementum vel velit. Donec elit nulla, porta quis mollis sit amet,
              convallis et elit. Etiam faucibus auctor auctor. Nullam sodales
              tincidunt dui sit amet tincidunt. Proin lacinia auctor maximus.
              Nam fringilla suscipit metus. Pellentesque eu ex nisl. Fusce
              consequat.
            </p>
            <p>
              Morbi vitae consequat libero. Fusce magna quam, aliquam ac nisl
              vitae, lobortis fermentum nisi. Vivamus hendrerit faucibus
              ullamcorper. Morbi vehicula magna facilisis ipsum euismod, nec
              semper velit posuere. Curabitur quam quam, tincidunt non lorem
              vel, semper pharetra mauris. Sed et tempus justo. Nam ac felis vel
              magna malesuada faucibus vitae sit amet turpis. Etiam aliquet ut
              diam eu dignissim. Suspendisse potenti. Duis posuere sem sed sem
              auctor, at efficitur dolor placerat. Etiam non hendrerit neque.
            </p>
          </div>
          <div className="col-xl-3 col-lg-12 text-center">
            <img
              src={photographer}
              alt="Тетяна Притака"
              className="img-fluid itd-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhotographerUA;
