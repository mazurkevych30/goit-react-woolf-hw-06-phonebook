import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { addFilter } from 'store/filterSlice/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(addFilter(e.target.value));
  };

  return (
    <div className={css.filter_container}>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={handleFilter} required />
    </div>
  );
};

export default Filter;
