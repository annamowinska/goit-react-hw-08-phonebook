import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contactsSlice';
//import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(filterContact(event.target.value));
  };

  return (
    <div className={css.box}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          onChange={handleFilterChange}
          placeholder="Search contact"
        />
      </label>
    </div>
  );
};

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };

export default Filter;
