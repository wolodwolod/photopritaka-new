import React, { useRef, useEffect } from "react";
import { Carousel as NativeCarousel } from "@fancyapps/ui/dist/carousel.esm.js";

import "@fancyapps/ui/dist/carousel.css";

function ReactCarousel(props) {
  const wrapper = useRef(null);

  useEffect(() => {
    const items = props.items || [];
    const opts = props.options || {};

    opts.slides = [...items].map((item) => {
      return { html: item.tag };
    });

    const instance = new NativeCarousel(wrapper.current, opts);

    return () => {
      instance.destroy();
    };
  }, [props.items, props.options]);

  return <div className={`carousel ${props.class || ""}`} ref={wrapper}>
 {props.items.map((item) => {
          return (
            <li
              key={item.id}
              className={`carousel__slide slider__small-item w-150`}
            >
              <img
                className="carousel__img"
                src={item.img}
                alt={`Slider ${item.tag}`}
              />
            </li>
          );
        })}
            

           
  </div>;
}

export default ReactCarousel;