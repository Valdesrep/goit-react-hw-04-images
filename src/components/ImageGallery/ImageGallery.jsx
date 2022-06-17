import React, { Component } from 'react';
import propTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';

export function ImageGallery({ images, openModal }) {
  return (
    <>
      <ul className={s.ImageGallery}>
        {images.map((image, id) => (
          <ImageGalleryItem key={id} image={image} openModal={openModal} />
        ))}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  openModal: propTypes.func.isRequired,
  images: propTypes.arrayOf(
    propTypes.shape({
      webformatURL: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
