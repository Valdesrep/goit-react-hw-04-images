import propTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem(image, openModal) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItemImage}
        onClick={() => {
          openModal(image);
        }}
        src={image.webformatURL}
        alt=""
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  openModal: propTypes.func.isRequired,
  image: propTypes.arrayOf(
    propTypes.shape({
      webformatURL: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGalleryItem;
