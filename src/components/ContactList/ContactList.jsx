import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.item}>
        <p>{name}:</p>
        <p>{number}</p>
        <button type="submit" onClick={() => deleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.number,
    }).isRequired
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
