import { useState } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = evt => {
    const { value } = evt.target;
    setValue(value);
    onChange(value);
  };

  return (
    <div className={css.box}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="name"
          value={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
