import { useDispatch } from 'react-redux';
import s from './TodoList.module.css';
import { changeFilter } from '../../redux/todoSlice';

export const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.wrapperSearch}>
      {/*  dispatch(changeFilter(e.target.value)) - запишему у  filter, що будемо шукати */}
      <input
        type="text"
        placeholder="Search..."
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};
