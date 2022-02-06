import PropTypes from 'prop-types';
const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            {name}: {number}{' '}
            <button type="button" id={id} onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.array,
};
export default Contacts;