import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'store/contactSlice/contactSlice';

const ContactList = ({ findContact }) => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contact);
  const { filter } = useSelector(state => state.filter);

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
