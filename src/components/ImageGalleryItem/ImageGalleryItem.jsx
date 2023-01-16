// import PropTypes from 'prop-types';
import s from './image-gallery-item.module.scss';
import { memo } from 'react';

const ImageGalleryItem = (
    {src, alt}  
) => {
    console.log(src);
//   console.log('rend Item')
  return (<li className={s.GalleryIitem}>
  <img className={s.GalleryItem__Img} src={src} alt={alt}/>
</li>  
    
  );}
    
  

// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

export default memo(ImageGalleryItem);