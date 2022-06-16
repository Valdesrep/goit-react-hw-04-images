import { useState, useEffect } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import fetchImage from 'servises/Api';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button';
import Modal from '../Modal';
import s from './App.module.css';
import { animateScroll as scroll } from 'react-scroll';
import Notiflix from 'notiflix';

function App() {
  const [imgInModal, setImgInModal] = useState(null);
  const [image, setImage] = useState('');
  const [page, setPage] = useState(1);
  const [imagesInGallery, setImagesInGallery] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [status, setStatus] = useState('idle');

  const getImage = image => {
    setImage(image);
    setPage(1);
    setImagesInGallery([]);
  };

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const onModalOpen = imgInModal => {
    setImgInModal(imgInModal);
    setModalShow(true);
  };
  const onModalClose = value => {
    setModalShow(value);
  };
}
const isVisible = imagesInGallery.length > 0;
return (
  <div className={s.App}>
    <Searchbar onSubmit={this.getImage} />;
    {imagesInGallery.length > 0 && (
      <ImageGallery images={imagesInGallery} openModal={onModalOpen} />
    )}
    {isVisible && <Button onClick={onLoadMore} />}
    {modalShow && <Modal onClose={onModalClose} img={imgInModal} />}
  </div>
);
