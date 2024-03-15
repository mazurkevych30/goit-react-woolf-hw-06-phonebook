import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'store/contactSlice/contactSlice';
import { getContacts, getFilter } from 'store/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const findContact = (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  return (
    <div>
      <ul className={css.list}>
        {findContact(contacts, filter).map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <p>
              <button
                onClick={() => dispatch(deleteContact(id))}
                className={css.button}
              >
                delete
              </button>
              {name}: {number}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
