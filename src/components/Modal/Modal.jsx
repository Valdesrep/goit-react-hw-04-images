import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';
import s from './Modal.module.css';

const modal = document.querySelector('#modal-root');

export default function Modal({ onClose, img }) {
  const onOverlay = e => {
    if (e.target === e.currentTarget) {
      onClose(false);
    }
  };
  useEffect(() => {
    const onEsc = e => {
      if (e.code === 'Escape') {
        onClose(null);
      }
    };

    window.addEventListener('keydown', onEsc);
    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, [onClose]);

  return createPortal(
    <div className={s.Overlay} onClick={onOverlay}>
      <div className={s.Modal}>
        <img src={img.largeImageURL} alt="" />
      </div>
    </div>,
    modal
  );
}
Modal.propTypes = {
  onClose: propTypes.func.isRequired,
  img: propTypes.string.isRequired,
};
