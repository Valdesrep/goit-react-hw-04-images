import s from './Button.module.css';
import propTypes from 'prop-types';

export default function Button({ onClick, page }) {
  const handeClick = event => {
    event.preventDefault();
    const updatedPage = page + 1;
    onClick(updatedPage);
  };
  return (
    <button className={s.moreBtn} type="button" onClick={handeClick}>
      Load More
    </button>
  );
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  page: propTypes.number.isRequired,
};
