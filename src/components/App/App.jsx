import React, { useState, useEffect, useRef } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import fetchImage from 'servises/Api';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button';
import Modal from '../Modal';
import s from './App.module.css';
import { animateScroll as scroll } from 'react-scroll';
import Notiflix from 'notiflix';

export function App() {
  const isFirstRender = useRef(true);
  const [imgInModal, setImgInModal] = useState(null);
  const [image, setImage] = useState('');
  const [page, setPege] = useState(1);
  const [imagesInGallery, setImagesInGallery] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const onFetch = async () => {
      if (image.trim()) {
        try {
          setStatus('pending');
          Notiflix.Loading.circle('Please wait ...');

          const imagesToGallery = await fetchImage(image, page);

          page === 1
            ? setImagesInGallery(imagesToGallery)
            : setImagesInGallery(state => [...state, ...imagesToGallery]);

          setStatus('resolved');
          Notiflix.Loading.remove();
          scroll.scrollToBottom();
        } catch {
          setStatus('reject');
          Notiflix.Loading.remove();
          Notiflix.Notify.failure(`По запросу ${image} ничего не найдено`);
        }
      }
    };
    onFetch();
  }, [image, page]);

  const getImage = image => {
    setImage(image);
    setPege(1);
    setImagesInGallery([]);
  };

  const onModalOpen = imgInModal => {
    setImgInModal(imgInModal);
  };
  const onLoadMore = () => {
    setPege(prevState => prevState + 1);
  };
  const isVisible = imagesInGallery.length > 0;

  return (
    <div className={s.App}>
      <Searchbar onSubmit={getImage} />
      {imagesInGallery.length > 0 && status && (
        <ImageGallery images={imagesInGallery} openModal={onModalOpen} />
      )}
      {isVisible && <Button onClick={onLoadMore} page={page} />}
      {imgInModal && <Modal onClose={setImgInModal} img={imgInModal} />}
    </div>
  );
}
