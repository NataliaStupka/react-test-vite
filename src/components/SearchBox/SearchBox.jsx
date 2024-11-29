import { useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/contacts/action';

import s from './SearchBox.module.css';
//import PropTypes from "prop-types";

const SearchBox = () => {
  const dispatch = useDispatch();
  const onInput = e => {
    console.log('filter:', e.target.value);
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <div className={s.searchWrapper}>
      <p>Find contact by name</p>

      <input type="text" onChange={onInput} />
    </div>
  );
};
//onChange={e => dispatch(changeFilter(e.target.value))}

// SearchBox.prototype = {
//   onFilter: PropTypes.func.isRequired,
// };

export default SearchBox;
