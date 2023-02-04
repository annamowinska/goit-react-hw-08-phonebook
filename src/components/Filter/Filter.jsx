//import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <div>
    <label>
      Find contacts by name
      <input type="name" value={value} onChange={onChange} />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Filter;
