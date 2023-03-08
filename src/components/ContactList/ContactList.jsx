import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  //const filter = useSelector(state => state.contacts.filter);
  console.log('contacts:', contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const filteredContact = (contacts.filter()
  //   contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()) ||
  //     contact.number.includes(filter)
  // );

  const handleDeleteContact = idContact => {
    dispatch(deleteContact(idContact));
    dispatch(fetchContacts())
      .then(() => {
        console.log('Contact has been successfully deleted');
      })
      .catch(error => {
        console.log(`Error: ${error.message}`);
      });
  };

  return (
    <table>
      <tbody className={css.list}>
        {contacts.map(({ idContact, name, number }) => (
          <tr key={idContact} id={idContact} className={css.item}>
            <td className={css.name}>{name}:</td>
            <td className={css.number}>{number}</td>
            <td>
              <button
                className={css.button}
                type="submit"
                onClick={() => handleDeleteContact(idContact)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      idContact: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ),
};

export default ContactList;
