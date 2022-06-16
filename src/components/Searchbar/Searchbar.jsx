import propTypes from 'prop-types';
import s from './Searchbar.module.css';
import { useState } from 'react';

function Searchbar(onSubmit) {
  const [image, setImage] = useState('');

  const onInputChange = e => {
    setImage(e.target.value);
  };

  const onFormSubit = event => {
    event.preventDefault();
    onSubmit(image);
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={onFormSubit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={onInputChange}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={image}
          />
        </form>
      </header>
    );
  };
}

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default Searchbar;
