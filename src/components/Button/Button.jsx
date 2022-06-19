import s from './Button.module.css';
import propTypes from 'prop-types';

export default function Button({ onClick }) {
  const handeClick = () => {
    onClick();
  };
  return (
    <button className={s.moreBtn} type="button" onClick={handeClick}>
      Load More
    </button>
  );
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
