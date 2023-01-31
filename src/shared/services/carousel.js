import '@fancyapps/ui/dist/carousel.css';

import React, { useRef, useEffect } from 'react';
import { Carousel as NativeCarousel } from '@fancyapps/ui/dist/carousel.esm.js';
import { Autoplay } from '@fancyapps/ui/dist/carousel.autoplay.esm.js';
NativeCarousel.Plugins.Autoplay = Autoplay;

function ReactCarousel(props) {
  const wrapper = useRef(null);

  useEffect(() => {
    const items = props.items || [];
    const opts = props.options || {};

    opts.slides = [...items].map(item => {
      return { html: item.tag };
    });

    const instance = new NativeCarousel(wrapper.current, {
      Autoplay: {
        timeout: 3000,
      },
    });

    return () => {
      instance.destroy();
    };
  });

  return (
    <div className={`carousel ${props.class || ''}`} ref={wrapper}>
      {props.items.map(item => {
        return (
          <li
            key={item.id}           
            className={`carousel__slide slider__small-item w-150 slide slide_${item.id}`}
          >
             <p className={`page_about page_about_${item.id}`}>{`${item.tag}`}</p>
            {/* <img
              className="carousel__img"
              src={item.img}
              alt={`Slider ${item.tag}`}
            /> */}
          </li>
        );
      })}
    </div>
  );
}

export default ReactCarousel;
