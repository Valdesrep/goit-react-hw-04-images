import s from './Button.module.css';
import propTypes from 'prop-types';

function Button(onClick) {
  onClick = event => {
    event.preventDefault();
    const updatedPage = page + 1;
    this.props.onClick(updatedPage);
  };
  return (
    <button className={s.moreBtn} type="button" onClick={onClick}>
      Load More
    </button>
  );
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
